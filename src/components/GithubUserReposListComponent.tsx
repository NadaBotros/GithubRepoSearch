import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    Chip,
    Box,
} from "@mui/material";
import {GitHubRepoModel} from "../Models/GithubModels";

interface Props {
    repos: GitHubRepoModel[];
}

export const GithubRepoList: React.FC<Props> = ({repos}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Repositories ({repos.length})
                </Typography>
                <List>
                    {repos.map((repo) => (
                        <ListItem
                            key={repo.id}
                            
                            component="a"
                            href={repo.html_url}
                            target="_blank"
                            divider
                        >
                            <ListItemText
                                primary={
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {repo.name}
                                    </Typography>
                                }
                                secondary={
                                    <Box sx={{mt: 0.5}}>
                                        <Chip
                                            label={repo.language || "Unknown"}
                                            variant="outlined"
                                            size="small"
                                            sx={{fontSize: "0.75rem"}}
                                        />
                                    </Box>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};
