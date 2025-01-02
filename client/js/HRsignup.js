import {roleapi} from "../api/user.api.js";
import {navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handleSubmit = (e) => {
  e.preventDefault();
  let user = {
    HRname: document.querySelector("#HRname").value,
    email: document.querySelector("#email").value,
    number: document.querySelector("#number").value,
    country:document.querySelector("#company").value,
    role:"HR",
    password: document.querySelector("#password").value,
  };
//   if (!user.HRname || !user.email || !user.password || !user.number || !user.company) {
//     alert("Please enter all required fields");
//     return;
//   }
  roleapi.signup(user);
};
document.getElementById("HRDetails").addEventListener("submit", handleSubmit);