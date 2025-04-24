import {render, screen, fireEvent} from '@testing-library/react';
import {RepoSearchBar} from '../RepoSearchBar';

describe('RepoSearchBar', () => {
    it('renders input and triggers on change', () => {
        const onChange = vi.fn();
        render(<RepoSearchBar searchQuery="" onSearchChange={onChange}/>);

        const input = screen.getByPlaceholderText(/type repository name or language/i);
        fireEvent.change(input, {target: {value: 'react'}});
        expect(onChange).toHaveBeenCalledWith('react');
    });
});
