import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <FontAwesomeIcon icon={faCode} className="fa-xl text-dark" />
          </Link>
          <span className="mb-3 mb-md-0 text-muted">
            © 2022 Kodluyoruz React Bootcamp, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <BsInstagram className="fa-2x text-dark" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <BsTwitter className="fa-2x text-dark" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <BsLinkedin className="fa-2x text-dark" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
