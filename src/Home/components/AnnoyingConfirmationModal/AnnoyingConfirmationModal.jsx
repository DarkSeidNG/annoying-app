import React from "react";
import ReactModal from "react-modal";
import style from "./AnnoyingConfirmationModal.module.css";

ReactModal.setAppElement("#root");

function AnnoyingMessage({ showModal, closeModal, canClose = true, message }) {
  const handleOnConfirm = () => {
    closeModal(false);
  };

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Example Modal"
      overlayClassName={style.overlay}
      className={style.modal}
    >
      <div className={style.message}>{message}</div>
      {canClose && (
        <div className={style["buttons-container"]}>
          <button className={style.button} onClick={handleOnConfirm}>
            Confirm
          </button>
        </div>
      )}
    </ReactModal>
  );
}

export default AnnoyingMessage;
