const portfolioItems = document.querySelector(".projects");
const resumesLink = document.querySelector("#resumesLink");
// console.log(resumesLink);
var closeButton;
let modalOpen = false;
function openModal(e) {
  e.preventDefault();
  
  if (!modalOpen) {
    const modalToggle = e.target.closest(".project__link");
    if (!modalToggle) return;
    const caption = modalToggle.parentElement;
    let modal = caption.nextElementSibling;
    modal.classList.add("modal-open");
    modalOpen = true;
    document.body.style.overflowY = "hidden";
    document.body.tabIndex = -"1";

    closeButton = modal.querySelector(".close-modal");
    closeButton.addEventListener("click", (_) => {
      modal.classList.remove("modal-open");
      document.body.style.overflowY = "visible";
      document.body.tabIndex = "0";
      modalOpen = false;
    });
  } else {
    console.log(modalOpen);
  }
}
function openResumesModal(e) {
  e.preventDefault();
  if(!modalOpen){

    let modal = e.target.parentElement.nextElementSibling;
    if(!modal) return;
    
    console.log(modal);
    modal.classList.add("modal-open");
    modalOpen = true;
    document.body.style.overflowY = "hidden";
    document.body.tabIndex = -"1";



    closeButton = modal.querySelector(".close-modal");
    closeButton.addEventListener("click", (_) => {
      modal.classList.remove("modal-open");
      document.body.style.overflowY = "visible";
      document.body.tabIndex = "0";
      modalOpen = false;
  });
}
}
portfolioItems.addEventListener("click", (e) => openModal(e));
// resumesLink.addEventListener("click", (e) => openModal(e));
resumesLink.addEventListener("click", (e) => openResumesModal(e));
resumesLink.addEventListener("click", e => console.log(e));

// console.log(portfolioItems);
