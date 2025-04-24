import {UserModelModel} from "../Models/GithubModels.ts";

export const mapUser = (user: any): UserModelModel => {
    return {
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        bio: user.bio,
        html_url: user.html_url,
        followers: user.followers,
        following: user.following,
    };
};

