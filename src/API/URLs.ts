export const GITHUB_USER_API_URL = 'https://api.github.com/users';
export const GITHUB_USER_REPOS_API_URL = (username: string, pageRate: number) =>
    `https://api.github.com/users/${username}/repos?per_page=${pageRate}`;