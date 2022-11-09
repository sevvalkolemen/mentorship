import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { deleteUser } from "../firebase";

function Mentors() {
  const { users } = useSelector((state) => state.users);

  return (
    <>
      <Navbar />
      <section className="container py-5 text-center">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light display-6 lh-1 mb-3">
              Meet some of our mentors
            </h1>
            <p className="lead text-muted">
              Our matching system is currently based on you giving us
              information via forms, we match you and then send you the relevant
              information per email. This is at the moment the easiest and
              quickest way to ensure a great mentorship experience for mentees
              and mentors!
            </p>
            <p>
              <a href="#" className="btn btn-primary m-2">
                Main call to action
              </a>
              <a href="#" className="btn btn-secondary m-2">
                Secondary action
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {users.map((user) => (
              <div key={user.id} className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div className="card-body">
                    <h3 className="text-center">{user.name}</h3>
                    <h6 className="text-center text-muted">{user.title}</h6>
                    <p className="card-text text-center">{user.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">
                        {user.experience} year experience
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mentors;
