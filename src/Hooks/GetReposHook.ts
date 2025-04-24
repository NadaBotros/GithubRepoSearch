import {useGithubStore} from './useGithubStore';
import {useEffect, useState} from 'react';
import {mapRepoArray} from "../Mappers/MapRepoData.ts";
import {getUserReposRequest} from "../API/GithubAPIs.ts";

export const GetReposHook = (username: string, pageNumber: number) => {
    const {getRepos, setRepos, getRepoPageNumber, setRepoPageNumber} = useGithubStore();
    const [loading, setLoading] = useState(false);

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
