const portfolioItems = document.querySelector('.portfolio-items');
var closeButton;
portfolioItems.addEventListener("click", e => {
    e.preventDefault();
    const modalToggle = e.target.closest('.modal-link');
    if (!modalToggle) return;    
    let parent = modalToggle.parentNode;
    let modal = parent.nextElementSibling;
    modal.classList.add('modal-open');    
    document.body.style.overflowY="hidden";

    closeButton = modal.childNodes[1];
    closeButton.addEventListener("click", _ => {
        modal.classList.remove('modal-open');
    });
});
