import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        Oturumun açık
        <button onClick={handleLogout} className="btn btn-danger ms-2">
          Çıkış yap
        </button>
      </div>
    </>
  );
}

export default Profile;
