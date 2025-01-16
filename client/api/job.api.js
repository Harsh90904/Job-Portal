
import { getToken } from "../utils/cookies.js";


const baseurl = "http://localhost:8090"
export const jobapi =  {
    createjob: async (data) => {
        console.log(getToken);   
        try {
            let req = await fetch(`${baseurl}/jobs`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${getToken(
                    )}`,
                },
                body: JSON.stringify(data),
            });
            let  res =await  req.json();
            console.log(res);
        } catch (error) {
            console.log("Failed to create job", error);
        }
    },
    getjob: async () => {
        try {
            let req = await fetch(`${baseurl}/jobs`);
            let  res = await req.json();
            console.log(res);
        } catch (error) {
            console.log("Failed to GET job", error);
        }
    },
    getjobByid: async (id) => {
        console.log(getToken);   
        try {
            let req = await fetch(`${baseurl}/jobs/${id}`, {
                headers: {
                    Authorization: `Bearer ${getToken}`,
                },
            });
            let  res =await  req.json();
            console.log(res);
        } catch (error) {
            console.log("Failed to create job", error);
        }
    },
    upadatejob: async (id,data) => {
        try {
            let req = await fetch(`${baseurl}/jobs/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            let  res = await req.json();
            console.log(res);
        } catch (error) {
            console.log("Failed to GET job", error);
        }
    },
    deletejob: async (id) => {
        console.log(getToken);   
        try {
            let req = await fetch(`${baseurl}/jobs/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken}`,
                },
            });
            let  res = await req.json();
            console.log(res);
        } catch (error) {
            console.log("Failed to create job", error);
        }
    }
}