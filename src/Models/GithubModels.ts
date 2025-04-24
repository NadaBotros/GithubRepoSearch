interface UserModelModel {

}


export interface GitHubRepoModel {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
}
