import React, { useState } from "react";
import { update, auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth";

function UpdateProfile({ closeModal }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [displayName, setDisplayName] = useState(user.displayName || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName
    });
    dispatch(
      login({
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        emailVerified: auth.currentUser.emailVerified,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      })
    );
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
            <h1 className="fw-bold mb-0 fs-2">Update Profile</h1>
            <button
              type="button"
              onClick={() => closeModal(false)}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-5 pt-0">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="John Doe"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
                <label htmlFor="floatingInput">Name - Surname</label>
              </div>
              <div className="modal-footer">
                <button
                  className="mb-2 btn btn-lg rounded-3 btn-primary "
                  type="submit"
                  disabled={!displayName}
                >
                  Update
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

export default UpdateProfile;
