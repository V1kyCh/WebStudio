(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modalBtn.addEventListener("click", toggleModal);
    function toggleModal(e) {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
  