import {useEffect, useState} from "react";
import {useGithubStore} from "./useGithubStore.ts";
import {getUserDataRequest} from "../API/GithubAPIs.ts";
import {mapUser} from "../Mappers/MapUserDate.ts";

export const GetUserDataHook = (username: string) => {
    const {getUserData, setUserData} = useGithubStore();
    const [loading, setLoading] = useState(false);

    const saveUserDataInState = async () => {
        try {
            setLoading(true);
            const res = await getUserDataRequest(username);
            if (!res) throw new Error('User not found');
            const mappedUser = mapUser(res);
            if (setUserData) {
                setUserData(mappedUser);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!getUserData && username) {
            saveUserDataInState();
        }
    }, [username]);

    return {
        setUserData,
        getUserData,
        loading,
    };
}