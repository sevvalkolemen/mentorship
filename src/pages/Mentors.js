import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Mentors() {
  const { users } = useSelector((state) => state.users);

  return (
    <>
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
              <Link to="/apply" className="btn btn-primary m-2">
                Apply for Mentorship
              </Link>
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
                  <img
                    className="car-img-top"
                    style={{ height: "350px" }}
                    src={user.img.downloadURL}
                  />
                  <div className="card-body">
                    <h3 className="card-title text-center">{user.name}</h3>
                    <h6 className="text-center text-muted">{user.title}</h6>
                    <p className="card-text text-center">{user.description}</p>
                    <div className="d-flex justify-content-end align-items-center">
                      {/* <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a> */}
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
    </>
  );
}

export default Mentors;
