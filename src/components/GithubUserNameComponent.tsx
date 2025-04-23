import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper
} from "@mui/material";

export const GithubUserNameComponent = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    // This function handles the submission of the username form.
    // It checks if the username is valid and navigates to the user's profile page.
    const handleSubmit = () => {
        if (username.trim() === '') {
            alert('Please enter a valid username');
            return;
        }
        navigate(`/user/${username}`);
    };

    return (
        <Container maxWidth="sm" sx={{mt: 10}}>
            <Paper elevation={3} sx={{p: 4}}>
                <Typography variant="h4" gutterBottom>
                    GitHub User Lookup
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Enter a GitHub username to fetch their public profile and repositories.
                </Typography>

                <Box sx={{mt: 3, display: 'flex', gap: 2}}>
                    <TextField
                        fullWidth
                        label="GitHub Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSubmit();
                        }}
                    />
                    <Button variant="contained" onClick={handleSubmit}>
                        Search
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};
