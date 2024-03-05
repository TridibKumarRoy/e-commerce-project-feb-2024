const wrapper = document.querySelector('.wrapper');
const registrationLink = document.querySelector('.registration-link');
const loginLink = document.querySelector('.login-link');

registrationLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}