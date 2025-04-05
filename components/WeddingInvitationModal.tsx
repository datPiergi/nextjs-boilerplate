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
      <Modal show={showModal} onHide={handleClose} centered>
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
