import { getToken } from "../utils/cookies.js";


const baseurl = "http://localhost:8090"
export const jobapi =  {
    createjob: async () => {
        try {
            let req = await fetch(`${baseurl}/job`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${getToken}`,
                },
                body: JSON.stringify(),
            });
            let  res =  req.json();
            console.log(res);
        } catch (error) {
            console.log("Failed to create job", error);
        }
    },
    getjob: async () => {
        try {
            let req = await fetch(`${baseurl}/job`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(),
            });
            let  res =  req.json();
            console.log(res);
        } catch (error) {
            console.log("Failed to GET job", error);
        }
    }
}