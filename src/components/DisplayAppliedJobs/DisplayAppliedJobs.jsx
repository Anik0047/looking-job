import React from "react";
import { Link } from "react-router-dom";

const DisplayAppliedJobs = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, job_type, id } = job;

  return (
    <div className="mb-10 mx-5 flex justify-center">
      <div className="flex bg-color">
        <div className="w-40">
          <img src={logo} alt="" />
        </div>
        <div className="flex  items-center">
          <div className="ps-5 pe-20">
            <h5 className="text-lg font-bold">{job_title}</h5>
            <p className="font-semibold pb-4">{company_name}</p>
            <div>
              <span className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {remote_or_onsite}
              </span>
              <span className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {job_type}
              </span>
            </div>
          </div>
          <div className=" pe-5">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary button border-0">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAppliedJobs;
