import {persist} from 'zustand/middleware';
import {create} from "zustand/react";
import {GitHubRepoModel} from "../Models/GithubModels.ts";

const localStorageKey = 'githubStore';

interface GithubReposState {
    repos: GitHubRepoModel[];
    getRepos: () => GitHubRepoModel[];
    setRepos: (newRepos: GitHubRepoModel[]) => void;
}

export const useGithubStore = create<GithubReposState>()(
    persist(
        (set, get) => ({
            repos: [],
            getRepos: () => {
                const {repos} = get();
                return repos;
            },
            setRepos: (newRepos) => {
                set({repos: newRepos});
            },
        }),
        {
            name: localStorageKey,
            partialize: (state) => ({repos: state.repos}),
        },
    ),
);