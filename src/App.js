import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import WhatIsMentorship from "./pages/WhatIsMentorship";
import Mentors from "./pages/Mentors";
import ApplytoMentorship from "./pages/ApplytoMentorship";
import Concat from "./pages/Concat";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/whatismentorship" element={<WhatIsMentorship />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/apply" element={<ApplytoMentorship />} />
        <Route path="/concat" element={<Concat />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
