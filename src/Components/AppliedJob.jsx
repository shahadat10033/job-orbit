import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const AppliedJob = () => {
  return (
    <div className="container my-5">
      {/*  */}
      <div className=" d-flex justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Filter By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Remote</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Onset</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/*  */}

      <div className="d-flex justify-content-between align-items-center  my-5 border px-5">
        <div className="d-flex py-3 ">
          <img src="" alt="" style={{ width: 200, height: 200 }} />
          <div className="ms-5">
            <h4 className="fw-semibold py-2">q</h4>
            <p className="">
              <small>w</small>
            </p>

            <button className="btn btn-outline-primary me-2 mb-3">gfd</button>
            <button className="btn btn-outline-primary mb-3">ggdg</button>
            <br />
            <span className="me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span> Address: </span>
              <span> ff</span>
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-coin"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <span> salary : </span>
              <span> singleJob.salary </span>
            </span>
          </div>
        </div>

        <div>
          {/* <Link to={`/jobinfo/${featureJob.id}`}> */}
          <button
            className="btn text-white my-2 "
            style={{ backgroundColor: "#8A82FF" }}
          >
            View Details
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;