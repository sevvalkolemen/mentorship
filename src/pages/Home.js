import React from "react";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default Home;
