const navigationButton = document.querySelector(".navigation-button");
const nav = document.querySelector(".hamburger");

const nav__svg = document.querySelector(".hamburger__svg");
const cta_section = document.querySelector(".cta");
const toggleNav = _ => {
    document.body.classList.toggle('nav-open');
};

navigationButton.addEventListener("click", _ => toggleNav());

const cta__sec = cta_section.getBoundingClientRect().top - 15-12;
document.addEventListener("scroll", _ => {
    
    if(window.pageYOffset >= cta__sec){
        nav__svg.style="stroke:white";
    } else{
        nav__svg.style="stroke:black";
    }
    console.log(window.pageYOffset);
    console.log(cta__sec);

});


