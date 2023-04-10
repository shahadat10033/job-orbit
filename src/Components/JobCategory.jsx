import React from "react";
import { useLoaderData } from "react-router-dom";

const JobCategory = () => {
  const jobCategory = useLoaderData();
  console.log(jobCategory);

  return (
    <div className="my-5 container">
      <h3 style={{ fontSize: 48 }} className="fw-bold text-center my-3">
        Job Category List
      </h3>
      <p className="text-center">
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </p>
      <div className="row g-3">
        {" "}
        {jobCategory.map((job) => (
          <div className="col-md-3 border rounded-3 ">
            <div>
              <img
                className="my-5 rounded-3"
                src={job.jobLogo}
                alt=""
                style={{ width: 70, height: 70 }}
              />
              <h4>{job.jobName}</h4>
              <p className="my-3">
                <small>
                  {job.jobVacancy} <span>Jobs Available</span>
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
