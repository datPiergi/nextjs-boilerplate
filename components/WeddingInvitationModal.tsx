"use client";

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const WeddingInvitationModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="text-center">
      {/* Button to trigger modal */}
      <Button variant="btn btn-outline-light" onClick={handleShow}>
        Visualizza invito
      </Button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered contentClassName="position-relative">
        {/* Custom Close Button (outside top-right) */}
        <div
          className="position-absolute d-block d-sm-none"
          style={{
            top: "-45px",
            right: "0",
            zIndex: 1051,
          }}
        >
          <button
            onClick={handleClose}
            aria-label="Chiudi"
            className="d-flex align-items-center justify-content-center border-0"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#f7f7f5",
              color: "#000000",
              fontSize: "24px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>

        <Modal.Body className="d-flex justify-content-center">
          <img
            src="/invito-nozze.png"
            alt="Wedding Invitation"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WeddingInvitationModal;
