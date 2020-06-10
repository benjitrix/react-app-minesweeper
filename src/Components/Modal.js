import React from "react";

const Modal = ({ show, children, handleClose }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="modalBtn" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
