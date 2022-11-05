import React, { useState } from "react";
import { update, auth, resetPassword } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth";

function UpdateProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
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
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(password);
    if (result) {
      setPassword("");
    }
  };

  return (
    <>
      <div
        className="modal modal-signin position-static d-block py-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Update Profile</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="John Doe"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Profile Picture</label>
                </div>

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
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Update Password</h1>
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

              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
                disabled={!password}
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
