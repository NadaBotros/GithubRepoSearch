import {useGithubStore} from './useGithubStore';
import {useEffect, useState} from 'react';
import {mapRepoArray} from "../Mappers/MapRepoData.ts";
import {getUserReposRequest} from "../API/GithubAPIs.ts";

export const GetReposHook = (username: string, pageNumber: number) => {
    const {getRepos, setRepos, getRepoPageNumber, setRepoPageNumber} = useGithubStore();
    const [loading, setLoading] = useState(false);

    /*
        * This function fetches user repositories from the API and saves them in the state.
        * It maps the response to a cleaner format and updates the state with the cleaned data.
        * It also handles loading state and error handling.
        * @returns {Promise<void>}
     */
    const saveReposInState = async () => {
        try {
            setLoading(true);
            const res = await getUserReposRequest(username, pageNumber);
            const cleanedRepos = mapRepoArray(res);
            setRepos(cleanedRepos);
            setRepoPageNumber?.(pageNumber);
            console.log('Saved cleaned repos:', cleanedRepos);
        } catch (error) {
            console.error('Error fetching repos:', error);
        } finally {
            setLoading(false);
        }
    };


    /*
        * This function checks if the repositories are already loaded in the state.
        * If not, it fetches and saves them in the state.
        * It also checks if the username or page number has changed,
        * and updates the state accordingly.
        * @returns {void}
     */
    useEffect(() => {
        const firstRepoOwner = getRepos()[0]?.owner?.login;
        const currentPage = getRepoPageNumber();

        if (
            (getRepos().length === 0 && username) ||
            username !== firstRepoOwner ||
            (pageNumber !== currentPage)
        ) {
            saveReposInState();
        }
    }, [username, pageNumber]);
    return {
        setRepos,
        getRepos,
        loading,
    };
};
