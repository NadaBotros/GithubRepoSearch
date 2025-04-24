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
import {RepoSearchBar} from "./RepoSearchBar";
import {useState} from "react";

interface Props {
    repos: GitHubRepoModel[];
}

export const GithubUserReposListComponent: React.FC<Props> = ({repos}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRepos = repos.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Repositories ({filteredRepos.length})
                </Typography>

                {/* Search Bar */}
                <RepoSearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery}/>

                {/* Repo List */}
                <List>
                    {filteredRepos.map((repo) => (
                        <ListItem
                            key={repo.id}
                            component="a"
                            href={repo.html_url}
                            target="_blank"
                            divider
                            sx={{width: "50rem"}}
                        >
                            <ListItemText
                                primary={
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {repo.name}
                                    </Typography>
                                }
                                secondary={
                                    <Typography component="div" variant="body2" color="text.secondary">
                                        <Box sx={{mt: 0.5}}>
                                            <Chip
                                                label={repo.language || "Unknown"}
                                                variant="outlined"
                                                size="small"
                                                sx={{fontSize: "0.75rem"}}
                                            />
                                        </Box>
                                    </Typography>
                                }
                                sx={{width: '100%'}}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};
