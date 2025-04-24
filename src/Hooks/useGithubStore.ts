import {persist} from 'zustand/middleware';
import {create} from "zustand/react";
import {GitHubRepoModel, UserModelModel} from "../Models/GithubModels.ts";

const localStorageKey = 'githubStore';

interface GithubState {
    repos: GitHubRepoModel[];
    getRepos: () => GitHubRepoModel[];
    setRepos: (newRepos: GitHubRepoModel[]) => void;
    userData?: UserModelModel;
    setUserData?: (userData: UserModelModel) => void;
    getUserData?: () => UserModelModel | undefined;
}


export const useGithubStore = create<GithubState>()(
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
            userData: undefined,
            setUserData: (userData) => {
                set({userData});
            },
            getUserData: () => {
                const {userData} = get();
                return userData;
            },
        }),
        {
            name: localStorageKey,
            partialize: (state) => ({repos: state.repos}),
        },
    ),
);