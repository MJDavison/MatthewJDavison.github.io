const portfolioItems = document.querySelector(".projects");
const resumesLink = document.querySelector("#resumesLink");
let anyModalOpen = false;
function openModal(e, linkClass){
if (!anyModalOpen) {
        const modalToggle = e.target.closest(linkClass);
        // console.log(modalToggle);
        if (modalToggle) {
            const modal = modalToggle.parentElement.nextElementSibling;
            console.log(modal);
            modal.classList.add('open');
            document.body.style.overflowY= "hidden";    
            anyModalOpen = true;
            const close = modal.children[0];
            console.log(close);
            close.addEventListener("click", _ => {
                modal.classList.remove('open');
                anyModalOpen = false;
                document.body.style.overflowY= "scroll";    
            })
        }
    }   
}

portfolioItems.addEventListener("click", (e) => openModal(e, '.project__link'));
resumesLink.addEventListener("click", (e) => openModal(e, '.modal__link'));

resumesLink.addEventListener("click", e => console.log(e));