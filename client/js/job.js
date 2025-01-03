import { jobapi } from "../api/job.api.js";
import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handleSubmit = (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let company = document.querySelector("#company").value;
  let location = document.querySelector("#location").value;
  let salary = document.querySelector("#salary").value;
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;
  let job = {
    title,
    description,
    company,
    location,
    salary,
    email,
    number,
  };
  jobapi.createjob(job);
};
document.getElementById("jobForm").addEventListener("submit", handleSubmit);
