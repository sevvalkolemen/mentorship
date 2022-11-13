import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import WhatIsMentorship from "./pages/WhatIsMentorship";
import { useSelector } from "react-redux";
import Mentors from "./pages/Mentors";
import ApplytoMentorship from "./pages/ApplytoMentorship";
import Concat from "./pages/Concat";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const { user } = useSelector((state) => state.auth);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/whatismentorship" element={<WhatIsMentorship />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/apply" element={<ApplytoMentorship />} />
        <Route path="/concat" element={<Concat />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
