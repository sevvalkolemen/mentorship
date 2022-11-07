import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <FontAwesomeIcon icon={faCode} className="fa-xl text-dark"/>
          </Link>
          <span class="mb-3 mb-md-0 text-muted">© 2022 Kodluyoruz React Bootcamp, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#">
              <BsInstagram className="fa-2x text-dark"/>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
                <BsTwitter className="fa-2x text-dark" />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <BsLinkedin className="fa-2x text-dark" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
