import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import mentor from "../img/mentor.jpg";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return (
      <>
        <Navbar />
        <div className="container bg-secondary bg-opacity-10 mt-5 rounded-3 col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={mentor}
                className="img-fluid shadow rounded"
                alt="mentor"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Welcome to MentorShip Program
              </h1>
              <p className="lead">
                Mentoring is a relationship in which a more experienced or
                knowledgeable person helps guide a less experienced or less
                knowledgeable person. The mentor may be older or younger than
                the mentor, but must have a specific area of expertise.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                <Link
                  to="/login"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Login
                </Link>
                <Link to="/register" className="btn btn-warning btn-lg px-4">
                  Sign-up
                </Link>
              </div>
            </div>
          </div>
        </div>

       
      </>
    );
  }
}

export default Home;
