const navigationButton = document.querySelector(".navigation-button");
const nav = document.querySelector(".hamburger");

const nav__svg = document.querySelector(".hamburger__svg");
nav__svg.style="stroke:black";
const cta_section = document.querySelector(".cta");
const toggleNav = _ => {
    document.body.classList.toggle('nav-open');
};

navigationButton.addEventListener("click", _ => toggleNav());

const cta__sec = cta_section.getBoundingClientRect().top - 15-12;

document.body.addEventListener("scroll", _ => {
    // console.log("Test");
    // console.log(document.body.scrollTop);
    // console.log(cta__sec);
    if(document.body.scrollTop >= cta__sec){
        nav__svg.style="stroke:white";
        //console.log(nav__svg.style);
        
    } else{
        nav__svg.style="stroke:black";
    }
});


