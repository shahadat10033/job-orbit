import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section
      className="d-flex justify-items-center  p-16 bg-light text-secondary "
      style={{ height: "100vh" }}
    >
      <div className="container d-flex flex-column justify-items-center   mx-auto my-5">
        <div className="max-w-md text-center">
          <h2 className="mb-5 fw-bold fs-1 text-secondary">
            <span className="fw-bold">Error</span> {status || 404}
          </h2>
          <p className="fs-2 fw-semibold  mb-5">{error?.message}</p>
          <Link
            to="/"
            className="px-5 py-3 font-semibold rounded bg-primary text-light text-decoration-none"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
