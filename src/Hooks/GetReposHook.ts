import {useGithubStore} from './useGithubStore';
import {useEffect, useState} from 'react';
import {mapRepoArray} from "../Mappers/MapRepoData.ts";
import {getUserReposRequest} from "../API/GithubAPIs.ts";

export const GetReposHook = (username: string, pageSize: number) => {
    const {getRepos, setRepos} = useGithubStore();
    const [loading, setLoading] = useState(false);

    const saveReposInState = async () => {
        try {
            setLoading(true);
            const res = await getUserReposRequest(username, pageSize);
            const cleanedRepos = mapRepoArray(res);
            setRepos(cleanedRepos);
            console.log('Saved cleaned repos:', cleanedRepos);
        } catch (error) {
            console.error('Error fetching repos:', error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (getRepos().length === 0 && username) {
            saveReposInState();
        }
    }, [username]);

    return {
        setRepos,
        getRepos,
        loading,
    };
};
