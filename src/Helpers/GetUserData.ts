// src/Hooks/fetchAndStoreUserData.ts
import {getUserDataRequest} from "../API/GithubAPIs.ts";
import {mapUser} from "../Mappers/MapUserDate.ts";
import {useGithubStore} from "../Hooks/useGithubStore.ts";
import {UserModelModel} from "../Models/GithubModels.ts";

export const fetchAndStoreUserData = async (username: string): Promise<boolean> => {
    try {
        const res = await getUserDataRequest(username);
        console.log("User data response:", res);
        if (!res) return false;

        const mappedUser: UserModelModel = mapUser(res);

        const {setUserData} = useGithubStore.getState();
        setUserData?.(mappedUser);
        console.log("User data fetched and stored:", mappedUser);
        return true;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return false;
    }
};
