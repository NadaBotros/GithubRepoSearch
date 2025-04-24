import {render, screen, fireEvent} from '@testing-library/react';
import {GithubUserReposListComponent} from '../GithubUserReposListComponent';
import {GitHubRepoModel} from '../../Models/GithubModels';

const mockRepos: GitHubRepoModel[] = [
    {
        id: 1,
        name: 'awesome-repo',
        full_name: '',
        html_url: 'https://github.com/test/awesome-repo',
        description: '',
        language: 'TypeScript',
        stargazers_count: 0,
        forks_count: 0,
        watchers_count: 0,
        open_issues_count: 0,
        created_at: '',
        updated_at: '',
        pushed_at: '',
        owner: {
            login: 'NadaBotros',
            avatar_url: '',
            html_url: '',
        },
    },
];

describe('GithubUserReposListComponent', () => {
    it('renders and filters repos', () => {
        render(<GithubUserReposListComponent repos={mockRepos}/>);

        expect(screen.getByText(/Repositories \(1\)/)).toBeInTheDocument();
        expect(screen.getByText(/awesome-repo/i)).toBeInTheDocument();
        expect(screen.getByText(/typescript/i)).toBeInTheDocument();

        const input = screen.getByPlaceholderText(/type repository name or language/i);
        fireEvent.change(input, {target: {value: 'react'}});

        expect(screen.queryByText(/awesome-repo/i)).not.toBeInTheDocument();
    });
});
