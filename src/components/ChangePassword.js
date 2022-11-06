import React, { useState } from "react";
import { resetPassword } from "../firebase";

function ChangePassword({ closeModal }) {
  const [password, setPassword] = useState("");

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(password);
    if (result) {
      setPassword("");
    }
    setTimeout(() => {
      closeModal(false);
    }, 1000);
  };

  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  return (
    <div
      className="modal show fade"
      style={modelStyle}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Update Password</h1>
            <button
              type="button"
              onClick={() => closeModal(false)}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-5 pt-0">
            <form onSubmit={handleResetSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingInput">Password</label>
              </div>

              <div className="modal-footer">
                <button
                  className="mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                  disabled={!password}
                >
                  Update Password
                </button>
                <button
                  className="mb-2 btn btn-lg rounded-3 btn-danger"
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
