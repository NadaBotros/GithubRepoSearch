// src/Hooks/fetchAndStoreUserData.ts
import {getUserDataRequest} from "../API/GithubAPIs.ts";
import {mapUser} from "../Mappers/MapUserDate.ts";
import {useGithubStore} from "../Hooks/useGithubStore.ts";
import {UserModel} from "../Models/GithubModels.ts";

export const fetchAndStoreUserData = async (username: string): Promise<UserModel> => {
    try {
        const res = await getUserDataRequest(username);
        if (!res) {
            return {} as UserModel;
        }
        const mappedUser: UserModel = mapUser(res);

        const {setUserData} = useGithubStore.getState();
        setUserData?.(mappedUser);
        return mappedUser;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return {} as UserModel;
    }
};
