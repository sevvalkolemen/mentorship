import React from "react";

function Concat() {
  return (
    <>
      <section className="container py-5 text-center">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light display-6 lh-1 mb-3">
              Mentee Application Form
            </h1>
            <p className="lead text-muted">
              Our matching system is currently based on you giving us
              information via forms, we match you and then send you the relevant
              information per email. This is at the moment the easiest and
              quickest way to ensure a great mentorship experience for mentees
              and mentors!
            </p>
          </div>
        </div>
      </section>

      <div className="container py-5 bg-light text-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdAREL7vnXz5K3iYgptehyEOdsnavw61H81qmWDdwdC36nbig/viewform?embedded=true"
          width="850"
          height="2100"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}

export default Concat;
