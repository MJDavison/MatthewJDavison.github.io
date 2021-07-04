const navToggle = document.querySelector('.navigation-button');
const openClass = 'nav-open';
navToggle.addEventListener('click', (e) => {
    document.body.classList.toggle(openClass);
})