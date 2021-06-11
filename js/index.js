const navigationButton = document.querySelector(".navigation-button");
const nav = document.querySelector(".hamburger");
const intro_section = document.querySelector(".intro");
const toggleNav = _ => {
    document.body.classList.toggle('nav-open');
};

navigationButton.addEventListener("click", _ => toggleNav());

nav.addEventListener("click", _ => console.log(nav));
document.addEventListener("scroll", _ => {
    if(window.pageYOffset > 534){
        nav.style="fill:white";
    } else{
        nav.style="fill:black";
    }
    

    
    console.log(intro_section.getBoundingClientRect().top);
    
    
});



console.log(window.pageYOffset);
var elDistanceToTop = window.pageYOffset + intro_section.getBoundingClientRect().top;
console.log(elDistanceToTop);