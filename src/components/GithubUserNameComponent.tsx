// src/components/GithubUserNameComponent.tsx
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
import {fetchAndStoreUserData} from "../Helpers/GetUserData.ts";

export const GithubUserNameComponent = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    /*
    * This function handles the submission of the username.
    * It trims the username, checks if it's valid,
    * fetches the user data, and navigates to the user page.
    * If the username is invalid or the user is not found,
    * it shows an alert.
    * @returns {Promise<void>}
     */
    const handleSubmit = async () => {
        const trimmedUsername = username.trim();
        if (!trimmedUsername) {
            alert("Please enter a valid GitHub username.");
            return;
        }

        const success = await fetchAndStoreUserData(trimmedUsername);
        if (!success) {
            alert("User not found.");
            return;
        }

        navigate(`/user/${trimmedUsername}`);
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
