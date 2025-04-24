import {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {GitHubRepoModel, UserModel} from '../Models/GithubModels';
import {GithubUserProfile} from '../components/GithubUserProfileComponent';
import {GithubUserReposListComponent} from '../components/GithubUserReposListComponent';
import {useParams} from 'react-router-dom';
import {GetReposHook} from "../Hooks/GetReposHook";
import {PAGE_SIZE} from "../Helpers/Constants";
import {fetchAndStoreUserData} from "../Helpers/GetUserData.ts";

export const GithubUserScreen: React.FC = () => {
    const {username} = useParams();

    const {getRepos, loading: reposLoading} = GetReposHook(username as string, PAGE_SIZE);

    const [userLoading, setUserLoading] = useState(true);
    const [userData, setUserData] = useState<UserModel | null>(null);

    /*
        * This function loads user data when the component mounts or when the username changes.
        * It fetches the user data from the API and updates the state.
        * If the username is not provided, it does nothing.
        * @returns {Promise<void>}
     */
    useEffect(() => {
        const loadUser = async () => {
            if (!username) return;
            setUserLoading(true);
            try {
                const user = await fetchAndStoreUserData(username);
                setUserData(user);
            } catch (error) {
                console.error("Error loading user:", error);
                setUserData(null);
            } finally {
                setUserLoading(false);
            }
        };

        loadUser();
    }, [username]);

    const repos: GitHubRepoModel[] = getRepos();

    if (userLoading || reposLoading) return <div>Loading...</div>;

    if (!userData) return <div>No user data found</div>;

    return (
        <Container maxWidth="lg" sx={{mt: 4}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <GithubUserProfile
                        name={userData.name}
                        login={userData.login}
                        bio={userData.bio}
                        avatarUrl={userData.avatar_url}
                        githubUrl={userData.html_url}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <GithubUserReposListComponent repos={repos}/>
                </Grid>
            </Grid>
        </Container>
    );
};
