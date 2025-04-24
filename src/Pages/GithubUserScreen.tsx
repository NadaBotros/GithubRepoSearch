import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {GitHubRepoModel} from '../Models/GithubModels';
import {GithubUserProfile} from '../components/GithubUserProfileComponent';
import {GithubRepoList} from '../components/GithubUserReposListComponent';
import {useParams} from 'react-router-dom';
import {GetReposHook} from '../Hooks/GetReposHook';

interface Props {
    userName: string;
}

export const GithubUserScreen: React.FC<Props> = ({userName}) => {
    const {username} = useParams();
    GetReposHook(username as string, 100);

    return (
        <Container maxWidth="lg" sx={{mt: 4}}>
            <Grid container spacing={4}>
                {/*<Grid item xs={12} md={4}>*/}
                {/*    <GithubUserProfile*/}
                {/*        name={user.name}*/}
                {/*        login={user.login}*/}
                {/*        bio={user.bio}*/}
                {/*        email={user.email}*/}
                {/*        avatarUrl={user.avatar_url}*/}
                {/*        githubUrl={user.html_url}*/}
                {/*    />*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} md={8}>*/}
                {/*    <GithubRepoList repos={repos}/>*/}
                {/*</Grid>*/}
            </Grid>
        </Container>
    );
};
