import { baseurl } from "./baseURL.js";
import { getToken } from "../utils/cookies.js";
export const role= {
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
          Cookies.set("isVerified", res.isVerified);
          console.log(res);
          window.location.href = "/";
        } catch (error) {
          console.log("Failed to sign up", error);
        }
      },
      login: async (user) => {
        try {
          let req = await fetch(`${baseurl}/role/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          });
          let res = await req.json();
          if (res.isActive) {
            Cookies.set("token", res.token, { expires: 1/24 });
            Cookies.set("isVerified", res.isVerified);
            window.location.href = "/";
          } else {
            alert("not activated");
          }
        } catch (error) {
          console.log("Failed to sign up", error);
        }
      },
}