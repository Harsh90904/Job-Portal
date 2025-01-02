
import { getToken } from "../utils/cookies.js";
const baseurl = "http://localhost:8090"
export const roleapi= {
    signup: async (user) => {
        try {
          let req = await fetch(`${baseurl}/role/signup`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          });
          let res = await req.json();
          Cookies.set("token", res.token, { expires: 1 });
          console.log(res);
          window.location.href = "/";
        } catch (error) {
          console.log("Failed to sign up", error);
        }
      },
      login: async (user) => {
        console.log(user);
        try {
          let req = await fetch(`${baseurl}/role/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          });
          let res = await req.json();
            Cookies.set("token", res.token, { expires: 1/24 });
            window.location.href = "http://127.0.0.1:5500/client/index.html";
        } catch (error) {
          console.log("Failed to sign up", error);
        }
      },
}