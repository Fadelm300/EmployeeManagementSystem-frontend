import React from "react";
import "./LogoutModal.css";

function LogoutModal({ show, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="logout-modal-backdrop">
      <div className="logout-modal-card">
        <div className="logout-modal-icon">🚪</div>

        <h3>Confirm Logout</h3>
        <p>Are you sure you want to logout?</p>

        <div className="logout-modal-actions">
          <button
            className="logout-modal-confirm"
            onClick={onConfirm}
          >
            Yes, Logout
          </button>

          <button
            className="logout-modal-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
