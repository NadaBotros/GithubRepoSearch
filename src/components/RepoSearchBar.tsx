import {TextField, Box} from "@mui/material";

interface RepoSearchBarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export const RepoSearchBar: React.FC<RepoSearchBarProps> = ({searchQuery, onSearchChange}) => {
    return (
        <Box sx={{width: '100%'}}>
            <TextField
                fullWidth
                label="Search by name or language"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Type repository name or language..."
            />
        </Box>
    );
};
