import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditContactsForm from "./EditContactsForm";

function User({ contactData, deleteUser, handleEdit }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    deleteUser(contactData.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactsForm
            handleEdit={handleEdit}
            hide={handleClose}
            contactData={contactData}
          />
        </Modal.Body>
      </Modal>
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name: {contactData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Phone: {contactData.phone}
          </h6>
          <p className="card-text">Location: {contactData.location}</p>
          <a
            className="btn btn-primary mr-3"
            href="#gh"
            onClick={handleShow}
            role="button"
          >
            Edit
          </a>
          <a
            className="btn btn-danger"
            href="#ghy"
            onClick={handleDelete}
            role="button"
          >
            Delete
          </a>
        </div>
      </div>
    </>
  );
}

export default User;
