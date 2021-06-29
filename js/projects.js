const projects_parent = document.querySelector(".projects");
const projects = projects_parent.children;
const projectCount = projects_parent.childElementCount;

for (let index = 5; index < projectCount; index++) {
    if(randomNumber(0,projectCount) == index){
        projects[index].classList.add("project--medium");
    }
    
}

function randomNumber(min,max){
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}