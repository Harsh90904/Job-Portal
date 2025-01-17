import { userapi } from '../api/pro.api.js';
import {navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
const form = document.getElementById('createProfileForm');
const messageDiv = document.getElementById('message');

// Handle form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Collect form data
    const profileData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        number: document.getElementById('number').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value,
        zip: document.getElementById('zip').value,
        skills: document.getElementById('skills').value.split(',').map(skill => skill.trim()),
        education: document.getElementById('education').value,
        university: document.getElementById('university').value,
        experience: document.getElementById('experience').value,
        github: document.getElementById('github').value,
        linkedin: document.getElementById('linkedin').value
    };

    try {
        const response = await userapi.createprofile(profileData);

        
        if (response && response.message) {
            messageDiv.innerHTML = `<div class="alert alert-success">${response.message}</div>`;
            form.reset();
        } else {
            messageDiv.innerHTML = `<div class="alert alert-danger">An error occurred</div>`;
        }
    } catch (error) {
        
        messageDiv.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    }
});
