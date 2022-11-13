import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div
        className="container text-center grid gap-y-6 pt-5"
        style={{ height: "750px" }}
      >
        <h6 className="font-semibold">Sorry, this page isn't available.</h6>
        <p>
          The link you followed may be broken, or the page may have been
          removed.
        </p>
        <Link className="btn btn-primary" to="/">
          Go back to Home.
        </Link>
      </div>
    </>
  );
}

export default NotFound;
