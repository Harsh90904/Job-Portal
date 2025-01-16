
import { getToken } from "../utils/cookies.js";
const baseurl = "http://localhost:8090";

export const userapi = {
    // Create a new profile
    createprofile: async (profileData) => {
        try {
            const response = await fetch(`${baseurl}/api/createprofile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profileData)
            });
            return await response.json();
        } catch (error) {
            console.error("Error creating profile:", error);
            throw error;
        }
    },

    // Get all users
    getusers: async () => {
        try {
            const response = await fetch(`${baseurl}/api/users`);
            return await response.json();
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    },

    // Get a user by ID
    getuserbyid: async (id) => {
        try {
            const response = await fetch(`${baseurl}/api/users/${id}`);
            return await response.json();
        } catch (error) {
            console.error("Error fetching user by ID:", error);
            throw error;
        }
    },

    // Update a user
    updateuser: async (id, updates) => {
        try {
            const response = await fetch(`${baseurl}/api/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updates)
            });
            return await response.json();
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    },

    // Delete a user
    deleteuser: async (id) => {
        try {
            const response = await fetch(`${baseurl}/api/users/${id}`, {
                method: "DELETE"
            });
            return await response.json();
        } catch (error) {
            console.error("Error deleting user:", error);
            throw error;
        }
    }
};
