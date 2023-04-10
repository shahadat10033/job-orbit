import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  d-flex justify-content-between container "
        style={{ backgroundColor: "#FAF8FF  " }}
      >
        <div>
          <Link
            to="/"
            className=" fw-bold text-decoration-none text-dark "
            style={{ fontSize: 32 }}
          >
            JOB ORBIT
          </Link>
        </div>
        <div>
          <Link
            to="/statistics"
            className="text-decoration-none me-4 text-secondary"
          >
            Statistics
          </Link>
          <Link
            to="/appliedJob"
            className="text-decoration-none me-4 text-secondary"
          >
            Applied jobs
          </Link>
          <Link to="/blog" className="text-decoration-none me-4 text-secondary">
            Blog
          </Link>
        </div>
        <div>
          <button
            className="btn text-white "
            style={{ backgroundColor: "#8A82FF" }}
          >
            Start Applying
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
