import { getUserData } from "../utils/cookies.js";

let { token } = Cookies.get();

const decodedToken = token ? jwt_decode(token) : undefined;
const logOut = () => {
  console.log("Decoded token");

  Cookies.remove("token");
  window.location.href = "/pages/login.html";
};
export const navbar = () => {
  let tag = ``;
  let hrtag = ``;
  if (decodedToken) {
    tag = `<a class="nav-link" id=logout>Logout</a>`;
  } else {
    tag = `<a class="nav-link" href="pages/login.html">Login</a>`;
  }
  
  try {
    if(getUserData().role === "HR"){
      hrtag = `<a class="nav-link" href="pages/Job.html">Create Job</a>`;
    }
    else{
      hrtag = ``;
    }
  } catch (error) {
    console.log(error.message);
    
  }
  return `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="images/logos/logo.png" alt="" width="110px">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/client">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html">Company reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html">Salary guide</a>
                    </li>
                    <li class="nav-item">
                        ${hrtag}
                    </li>
                    <li class="nav-item">
                        ${tag}
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ${
                            decodedToken ? "" : ` href=./pages/signup.html`
                        }>${decodedToken ? decodedToken.name : "Signup"}</a>
                    </li>
                    
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> 
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    `;
};
document.addEventListener("DOMContentLoaded", () => {
    let logoutBtn = document.getElementById("logout");
  
    if (logoutBtn) {
      logoutBtn.addEventListener("click", logOut);
    }
  });