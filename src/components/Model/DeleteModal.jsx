import React from "react";
import "./DeleteModal.css";

function DeleteModal({ show, employee, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="del-modal-backdrop">
      <div className="del-modal-card">
        <div className="del-modal-icon">⚠️</div>

        <h3>Delete Employee</h3>
        <p>
          Are you sure you want to delete
          <br />
          <strong>{employee?.name}</strong>?
        </p>

        <div className="del-modal-actions">
          <button className="del-modal-delete" onClick={onConfirm}>
            Yes, Delete
          </button>
          <button className="del-modal-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
