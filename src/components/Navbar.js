import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 me-5 text-white text-decoration-none"
          >
            <FontAwesomeIcon icon={faCode} className="fa-2xl"/>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white me-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/whatismentorship" className="nav-link px-2 text-white me-2">
                What is Mentorship
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white me-2">
                Mentors
              </a>
            </li>
            <li>
              <Link to="/profile" className="nav-link px-2 text-white me-2">
                Profile
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white me-2">
                Concat
              </a>
            </li>
          </ul>

          <div className="text-end">
            <Link to="/login"  className="btn btn-outline-light me-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-warning">
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
