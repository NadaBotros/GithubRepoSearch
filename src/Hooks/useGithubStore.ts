import {persist} from 'zustand/middleware';
import {create} from "zustand/react";
import {GitHubRepoModel, UserModel} from "../Models/GithubModels.ts";

const localStorageKey = 'githubStore';

interface GithubState {
    repos: GitHubRepoModel[];
    getRepos: () => GitHubRepoModel[];
    setRepos: (newRepos: GitHubRepoModel[]) => void;
    userData: UserModel | undefined;
    setUserData: (userData: UserModel) => void;
    getUserData: () => UserModel | undefined;
    repoPageNumber: number;
    setRepoPageNumber: (pageNumber: number) => void;
    getRepoPageNumber: () => number | undefined;
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
            repoPageNumber: 0,
            setRepoPageNumber: (pageNumber) => {
                set({repoPageNumber: pageNumber});
            },
            getRepoPageNumber: () => {
                const {repoPageNumber} = get();
                return repoPageNumber;
            },
        }),
        {
            name: localStorageKey,
            partialize: (state) => ({
                repos: state.repos,
                userData: state.userData,
                repoPageNumber: state.repoPageNumber,
            }),
        },
    ),
);