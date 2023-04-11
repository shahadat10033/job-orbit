import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { getJobCart } from "../utilities/fakeDB";
import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
  // const allJob = useLoaderData();
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("/public/jobListing.json")
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, []);
  const jobCart = getJobCart();
  let job = [];

  for (const id in jobCart) {
    const foundJob = value.find((element) => element.companyName === id);
    if (foundJob) {
      job.push(foundJob);
    }
  }
  // const appliedJob = value.find(
  //   (element, index) => element.companyName === Object.keys(jobCart)[index]
  // );

  // const newJobCart = Object.keys(jobCart);

  console.log(job);

  return (
    <div className="container  relative">
      {/* navbar section start */}
      <div>
        <nav
          className="navbar navbar-expand-lg  d-flex justify-content-between container "
          style={{ backgroundColor: "#FAF8FF  ", paddingBottom: "150px" }}
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
            <Link
              to="/blog"
              className="text-decoration-none me-4 text-secondary"
            >
              Blog
            </Link>
          </div>
          <div>
            <Link to="/appliedJob">
              <button
                className="btn text-white "
                style={{ backgroundColor: "#8A82FF" }}
              >
                Start Applying
              </button>
            </Link>
          </div>

          {/*  */}
          <svg
            width="149"
            height="58"
            viewBox="0 0 349 218"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <path
                d="M281.834 45.3951C281.841 51.3583 280.672 57.2643 278.394 62.7738C276.115 68.2833 272.772 73.2879 268.557 77.5002L128.242 218H0L204.436 13.295C210.777 6.94665 218.855 2.62349 227.65 0.872116C236.444 -0.879263 245.56 0.0197821 253.844 3.4556C262.128 6.89142 269.209 12.7097 274.191 20.1748C279.173 27.6399 281.833 36.4166 281.834 45.3951Z"
                fill="url(#paint0_linear_7_252)"
              />
              <path
                d="M334.513 109.862C334.518 113.598 333.786 117.298 332.359 120.75C330.932 124.202 328.839 127.337 326.199 129.976L238.339 218H158.038L286.049 89.7511C290.02 85.7738 295.078 83.0653 300.585 81.9681C306.092 80.8708 311.8 81.4341 316.987 83.5866C322.174 85.7392 326.608 89.3844 329.728 94.0613C332.847 98.7383 334.513 104.237 334.513 109.862Z"
                fill="url(#paint1_linear_7_252)"
              />
              <path
                d="M349 167.05C349.002 168.811 348.653 170.554 347.971 172.18C347.29 173.807 346.29 175.284 345.029 176.527L303.066 218H264.713L325.853 157.575C327.749 155.701 330.165 154.425 332.795 153.908C335.426 153.391 338.152 153.656 340.629 154.671C343.107 155.685 345.224 157.402 346.714 159.606C348.204 161.809 349 164.4 349 167.05Z"
                fill="url(#paint2_linear_7_252)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_7_252"
                x1="-8.31465e-07"
                y1="107.323"
                x2="349"
                y2="107.323"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7E90FE" />
                <stop offset="1" stop-color="#9873FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_7_252"
                x1="-8.31465e-07"
                y1="107.323"
                x2="349"
                y2="107.323"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7E90FE" />
                <stop offset="1" stop-color="#9873FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_7_252"
                x1="-8.31465e-07"
                y1="107.323"
                x2="349"
                y2="107.323"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7E90FE" />
                <stop offset="1" stop-color="#9873FF" />
              </linearGradient>
            </defs>
          </svg>

          {/*  */}
        </nav>
      </div>
      {/* navbar setion end */}

      {/*dropdown button start  */}
      <div className=" d-flex justify-content-end mt-5">
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
      {/*dropdown button end */}

      {job.map((singleJob) => (
        <div className="d-flex justify-content-between align-items-center  my-5 border px-5">
          <div className="d-flex py-3 ">
            <img
              src={singleJob.companyLogo}
              alt=""
              style={{ width: 200, height: 200 }}
            />
            <div className="ms-5">
              <h4 className="fw-semibold py-2">{singleJob.jobPosition}</h4>
              <p className="">
                <small>{singleJob.companyName}</small>
              </p>

              <button className="btn btn-outline-primary me-2 mb-3">
                {singleJob.jobStyle}
              </button>
              <button className="btn btn-outline-primary mb-3">
                {singleJob.jobDuration}
              </button>
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
                <span> {singleJob.address}</span>
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
                <span>{singleJob.salary} </span>
              </span>
            </div>
          </div>

          <div>
            <Link to={`/jobInfo/${singleJob.id}`}>
              <button
                className="btn text-white my-2 "
                style={{ backgroundColor: "#8A82FF" }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJob;
