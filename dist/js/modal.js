const portfolioItems = document.querySelector('.projects');
const resumesLink = document.querySelector('#resumesLink')
var closeButton;
function openModal(e) {
    e.preventDefault();
    const modalToggle = e.target.closest('.project__link');
    if (!modalToggle) return;    
    let parent = modalToggle.parentNode;    
    let modal = parent.nextElementSibling.nextElementSibling;
    modal.classList.add('modal-open');    
    document.body.style.overflowY="hidden";
    document.body.tabIndex=-"1";    
    closeButton = modal.childNodes[1];
    closeButton.addEventListener("click", _ => {
        modal.classList.remove('modal-open');
        document.body.style.overflowY="visible";
        document.body.tabIndex="0";
    });
}
portfolioItems.addEventListener("click", e => openModal(e));
resumesLink.addEventListener("click", e => openModal(e));
