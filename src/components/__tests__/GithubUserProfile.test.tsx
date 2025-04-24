import {render, screen} from '@testing-library/react';
import {GithubUserProfile} from "../GithubUserProfileComponent.tsx";

describe('GithubUserProfile', () => {
    const mockProps = {
        name: 'Nada Botros',
        login: 'NadaBotros',
        bio: 'Loves open source',
        avatarUrl: 'https://avatars.githubusercontent.com/u/123?v=4',
        githubUrl: 'https://github.com/NadaBotros',
    };

    it('renders user profile correctly', () => {
        render(<GithubUserProfile {...mockProps} />);
        expect(screen.getByText(/Nada Botros/i)).toBeInTheDocument();
        expect(screen.getByText(/@NadaBotros/i)).toBeInTheDocument();
        expect(screen.getByText(/Loves open source/i)).toBeInTheDocument();
    });
});
