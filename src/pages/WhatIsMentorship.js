import React from "react";
import Navbar from "../components/Navbar";
import mentor1 from "../img/mentorship/mentor1.jpg";
import mentor2 from "../img/mentorship/mentor2.jpg";
import mentor3 from "../img/mentorship/mentor3.jpg";
import { FaStarOfLife, FaNetworkWired, FaBlog } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function WhatIsMentorship() {
  return (
    <>
      <Navbar />

      <div className="container rounded-3 mt-5">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={mentor1}
                alt=""
                className="d-block w-100"
                style={{ height: "46rem" }}
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Tailored mentorship programs for you</h1>
                  <p>
                  A mentoring relationship is one that is built on trust, in which there is an exchange of knowledge, experience and goodwill.
                  </p>
                  <p>
                    <Link to="/register" className="btn btn-lg btn-warning" >
                      Sign up today
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-item-next carousel-item-start">
              {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
              <img
                src={mentor3}
                alt=""
                className="d-block w-100"
                style={{ height: "46rem" }}
              />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Strategic Mentorships</h1>
                  <p>
                  Click the button below to see the mentorship gallery and go to the details.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse Gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={mentor2}
                alt=""
                className="d-block w-100"
                style={{ height: "46rem" }}
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Peer Mentorships</h1>
                  <p>
                  Click the button below to see the mentorship gallery and go to the details.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container py-4 mt-5">
        <h2 class="pb-2 border-bottom display-6 fw-bold lh-1 mb-3">
        Learn more about Mentorship
        </h2>
        <div className="row align-items-md-stretch py-5">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>What it means to be a mentor</h2>
              <p>
                The core of the MentorShip Program is one-on-one mentoring
                between less privileged applicants and the best mentors
                available. Your support for 1-2 hours a month can have a great
                effect. As a mentor, you provide encouragement, application
                support, and tips and tricks to applicants during the
                application process.
              </p>
              <button className="btn btn-outline-light" type="button">
                Apply to be a mentor
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>What is the Mentoring Programs?</h2>
              <p>
                The purpose of mentoring is to grow by tapping into the
                knowledge and experience of someone further along than yourself.
                It's the best way to accelerate your development. In this guide,
                we break down everything about mentorship: the benefits, what
                makes a mentor, mentoring in the workplace, and how you can
                launch a mentorship program.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Benefits of being a mentor</h2>
              <p>
                Being a mentor serves as a way to give back and is an important
                development and learning experience. Teaching others is the best
                way to learn yourself. In the same way, mentors become more
                competent as leaders and communicators as they guide and help
                rising talent. Mentors will become known as advisors that are
                open to helping others.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Why is mentorship important? </h2>
              <p>
                Mentorship is important because it provides employees with the
                opportunity to develop and become more competent in their roles
                as well as prepare for growth opportunities in the future.
                Providing these opportunities is key for organisations that want
                to attract, retain and engage their talent.
              </p>
              <button className="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom display-6 fw-bold lh-1 mb-3">
          Why you should become a mentor
        </h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="fs-4 me-3">
              <FaStarOfLife className="fa-xl text-dark" />
            </div>
            <div>
              <h3 class="fs-2">Make a difference in a mentee’s life</h3>
              <p>
                You can change your mentee’s lives! Imagine the support you wish
                you had when you decided where to study or how to write your
                personal statement. With your experience you can help your
                mentees succeed
              </p>
              <a href="#" class="btn btn-warning">
                Learn More
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="fs-4 me-3">
              <FaNetworkWired className="fa-xl text-dark" />
            </div>
            <div>
              <h3 class="fs-2">Join a network of inspiring students</h3>
              <p>
                You can join a team of over 5,000 registered advisors from
                around the world. In this way, your network develops. We host
                regular campus events where you can meet inspiring students and
                make new friends.
              </p>
              <a href="#" class="btn btn-warning">
                Learn More
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="fs-4 me-3">
              <FaBlog className="fa-xl text-dark" />
            </div>
            <div>
              <h3 class="fs-2">Training, resources and partner events</h3>
              <p>
                We provide training and resources for you to help your mentee
                succeed. You’ll learn and practice time management,
                interpersonal skills, and we help you to develop professionally
                by connecting you with partners
              </p>
              <a href="#" class="btn btn-warning">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WhatIsMentorship;
