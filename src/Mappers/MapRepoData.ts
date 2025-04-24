import {GitHubRepoModel} from "../Models/GithubModels.ts";

export const mapSingleRepo = (repo: any): GitHubRepoModel => {
    return {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        watchers_count: repo.watchers_count,
        open_issues_count: repo.open_issues_count,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
        owner: {
            login: repo.owner.login,
            avatar_url: repo.owner.avatar_url,
            html_url: repo.owner.html_url,
        },
    };
};

export const mapRepoArray = (repoData: any[]): GitHubRepoModel[] => {
    return repoData.map(mapSingleRepo);
};