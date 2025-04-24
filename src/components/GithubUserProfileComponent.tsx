import {Card, CardContent, Typography, Avatar, Stack, Button} from "@mui/material";

interface Props {
    name: string;
    login: string;
    bio: string;
    avatarUrl: string;
    githubUrl: string;
}

export const GithubUserProfile: React.FC<Props> = ({
                                                       name,
                                                       login,
                                                       bio,
                                                       avatarUrl,
                                                       githubUrl,
                                                   }) => {
    return (
        <Card sx={{mb: 2}}>
            <CardContent>
                <Stack spacing={2} alignItems="center">
                    <Avatar src={avatarUrl} alt={login} sx={{width: 120, height: 120}}/>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">@{login}</Typography>
                    <Typography variant="body2">{bio}</Typography>
                    <Button
                        variant="outlined"
                        href={githubUrl}
                        target="_blank"
                        fullWidth
                        sx={{mt: 1}}
                    >
                        View on GitHub
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
};
