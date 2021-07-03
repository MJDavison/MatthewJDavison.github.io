const navigationButton = document.querySelector(".navigation-button");
const nav = document.querySelector(".hamburger");

const nav__svg = document.querySelector(".hamburger__svg");
// nav__svg.style="stroke:white";
// const portfolio_section = document.querySelector(".portfolio");
// const about_section = document.querySelector(".about");
const toggleNav = _ => {
    document.body.classList.toggle('nav-open');
};

navigationButton.addEventListener("click", _ => toggleNav());

// const portfolio__sec__top = portfolio_section.getBoundingClientRect().top ;
// const about__sec__top = about_section.getBoundingClientRect().top - 15-12;


// console.log(portfolio_section.getBoundingClientRect());
// console.log(about_section.getBoundingClientRect());

// document.body.addEventListener("scroll", e => {
//     console.log(document.body.scrollTop);
//     // console.log("Test");
//     // console.log(document.body.scrollTop);
//     // console.log(cta__sec);
//     if(document.body.scrollTop >= portfolio__sec__top){
//         nav__svg.style="stroke:black";
//         //console.log(nav__svg.style);
//         if(document.body.scrollTop >= about__sec__top){
//             nav__svg.style="stroke:white";
//         }  
//     } 
//     else{
//         nav__svg.style="stroke:white";
//     }
// });


