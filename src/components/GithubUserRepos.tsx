import {useParams} from "react-router-dom";

export const GithubUserRepos = () => {
    const {username} = useParams();

    return <div>Fetching repos for {username}</div>;

}