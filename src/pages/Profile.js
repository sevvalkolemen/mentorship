import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useSelector } from "react-redux";
import UpdateProfile from "../components/UpdateProfile";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

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
        <div className="container mt-2">
          {user.photoURL && (
            <img
              src={user.photoURL}
              className="rounded-circle"
              style={{ width: "180px" }}
            />
          )}

          <h3 className="mt-3">{user.displayName}</h3>
          <button onClick={handleLogout} className="btn btn-danger ms-2">
            Çıkış yap
          </button>
        </div>
        <UpdateProfile />
      </>
    );
  }
}

export default Profile;
