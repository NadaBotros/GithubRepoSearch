import {useParams} from "react-router-dom";
import {GetReposHook} from "../Hooks/GetReposHook.ts";

export const GithubUserRepos = () => {
    const {username} = useParams();
    const getReposHookResult = GetReposHook(username as string, 100);
    return <div>Fetching repos for {username}</div>;

}