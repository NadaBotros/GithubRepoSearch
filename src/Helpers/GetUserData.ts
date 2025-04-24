// src/Hooks/fetchAndStoreUserData.ts
import {getUserDataRequest} from "../API/GithubAPIs.ts";
import {mapUser} from "../Mappers/MapUserDate.ts";
import {useGithubStore} from "../Hooks/useGithubStore.ts";
import {UserModel} from "../Models/GithubModels.ts";

/**
 * This function fetches user data from the GitHub API using the provided username.
 * It maps the response to a cleaner format and saves it in the Zustand store.
 * If the user is not found or an error occurs, it returns an empty object.
 *
 * @param {string} username - The GitHub username to fetch data for.
 * @returns {Promise<UserModel>} - The mapped user data or an empty object if not found.
 */
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
