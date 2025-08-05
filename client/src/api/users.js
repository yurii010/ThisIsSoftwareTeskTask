import axios from "axios";
import { API_URL } from "../configs/config";

export const loadUsers = async (count) => {
    try {
        const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const loadUsersFromDB = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const addUserToDB = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/users`, data);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const deleteUserFromDB = async (userid) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${userid}`);
        if (response.status === 200) {
            return userid;
        }
        return "";
    } catch (error) {
        console.error(error);
    }
};
