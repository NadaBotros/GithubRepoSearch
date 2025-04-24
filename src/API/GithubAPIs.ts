import {GITHUB_USER_API_URL} from "./URLs.ts";

export const getUserData = async (username: string) => {
    const res = await fetch(GITHUB_USER_API_URL + `/${username}`);
    if (!res.ok) throw new Error('User not found');
    console.log(res);
    return res.json();
};

export const getUserRepos = async (username: string, pageRate: number) => {
    const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${pageRate}`
    );
    if (!res.ok) throw new Error('User not found');
    console.log(res);
    return res.json();
};