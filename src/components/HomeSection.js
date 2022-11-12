import React from "react";
import mentor from "../img/home/mentor.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import homeMentor1 from "../img/home/home-mentor1.jpg";
import homeMentor2 from "../img/home/home-mentor2.jpg";
import homeMentor3 from "../img/home/home-mentor3.jpg";

function HomeSection() {
  return (
    <>
      <div className="container px-4 bg-secondary bg-opacity-10 mt-5 rounded-3 col-xxl-8 py-5">
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
              knowledgeable person. The mentor may be older or younger than the
              mentor, but must have a specific area of expertise.
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

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom display-6 fw-bold lh-1 mb-3">
          Some of our works
        </h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${homeMentor1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Career Review and Advice
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={homeMentor1}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <FontAwesomeIcon
                      icon={faMapPin}
                      className="fa-lg bi me-2"
                    />
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${homeMentor2})`,
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Reverse Mentoring Work
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={homeMentor3}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <FontAwesomeIcon
                      icon={faMapPin}
                      className="fa-lg bi me-2"
                    />
                    <small>Pakistan</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${homeMentor3})`,
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  One-on-One Mentoring
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={homeMentor3}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <FontAwesomeIcon
                      icon={faMapPin}
                      className="fa-lg bi me-2"
                    />
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom display-6 fw-bold lh-1 mb-3">
            Join our team
          </h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="fs-4 me-3">
                <FontAwesomeIcon icon={faQuestion} className="fa-xl me-2" />
              </div>
              <div>
                <h3 className="fs-2">What is Mentorship</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <Link to="/whatismentorship" className="btn btn-warning">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="fs-4 me-3">
                <FontAwesomeIcon icon={faPerson} className="fa-xl me-2" />
              </div>
              <div>
                <h3 className="fs-2">Mentors</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <Link to="/mentors" className="btn btn-warning">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="fs-4 me-3">
                <FontAwesomeIcon icon={faGlobe} className="fa-xl me-2" />
              </div>
              <div>
                <h3 className="fs-2">Concat us</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <Link to="/apply" className="btn btn-warning">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
