import React from "react";

const HeaderArticle = () => {
  return (
    <div className="container my-3">
      {" "}
      <div className="row ">
        {/* article section starts */}
        <div className="col-md-6 ">
          <h1 style={{ fontSize: 80 }} className="fw-bold">
            One Step<br></br> Closer To Your<br></br>
            <span style={{ color: "#8A82FF" }}>Dream Job</span>
          </h1>
          <p className="my-3">
            <small>
              Explore thousands of job opportunities with all the information
              you need.<br></br> Its your future. Come find it. Manage all your
              job application from start to finish.
            </small>
          </p>
          <button
            className="btn text-white my-2 "
            style={{ backgroundColor: "#8A82FF" }}
          >
            Get Started
          </button>
        </div>
        {/* article section end*/}

        {/* image section  starts*/}
        <div className="col-md-6">
          <img
            className="img-fluid rounded-3"
            src="/public/image/download.webp"
            alt=""
          ></img>
        </div>
        {/* image section  end*/}
      </div>
    </div>
  );
};

export default HeaderArticle;
