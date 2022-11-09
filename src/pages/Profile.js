import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useSelector } from "react-redux";
import UpdateProfile from "../components/UpdateProfile";
import ChangePassword from "../components/ChangePassword";
import Footer from "../components/Footer";
import AddProfileInformation from "../components/AddProfileInformation";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [openUpdateProfileModal, setOpenUpdateProfileModal] = useState(false);
  const [openChangePasswordModal, setChangePasswordModal] = useState(false);

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  if (user) {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <div className="p-2 mb-4 bg-secondary bg-opacity-10 rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold text-center mb-5">
                Profile Information
              </h1>
              <div className="row">
                <div className="col-md-6 text-center">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      className="rounded"
                      style={{ width: "280px" }}
                      alt={user.displayName}
                    />
                  )}
                </div>
                <div className="col-md-6">
                  <div className="card-block">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5>Name-Surname</h5>
                        <h6 className="text-muted f-w-400">
                          {user.displayName}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <h5>Email Address</h5>
                        <h6 className="text-muted f-w-400">{user.email}</h6>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-sm-6">
                        <h5>Photo URL</h5>
                        <h6 className="text-muted f-w-400">photoURL</h6>
                      </div>
                      <div className="col-sm-6">
                        <h5>Password</h5>
                        <h6 className="text-muted f-w-400">{user.password}</h6>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-sm-4">
                        <button
                          onClick={() => setOpenUpdateProfileModal(true)}
                          className="btn btn-success"
                        >
                          Update Profile
                        </button>
                        {openUpdateProfileModal && (
                          <UpdateProfile
                            closeModal={setOpenUpdateProfileModal}
                          />
                        )}
                      </div>
                      <div className="col-sm-4">
                        <button
                          onClick={() => setChangePasswordModal(true)}
                          className="btn btn-warning"
                        >
                          Reset Password
                        </button>
                        {openChangePasswordModal && (
                          <ChangePassword closeModal={setChangePasswordModal} />
                        )}
                      </div>
                      <div className="col-sm-4">
                        <button
                          onClick={handleLogout}
                          className="btn btn-danger"
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AddProfileInformation />
        </div>
        <Footer />
      </>
    );
  }
}

export default Profile;
