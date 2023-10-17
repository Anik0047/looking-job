import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Jobs = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  const iconLocation = <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>;
  const iconDolarSign = <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo} className="rounded-xl w-" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{job_title}</h2>
          <p className="font-bold">
            <small>{company_name}</small>
          </p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]"> 
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <p><span className="pe-3">{iconLocation}</span>{location}</p>
          <p><span className="pe-3">{iconDolarSign}</span>{salary}</p>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary button border-0">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

{
  /* <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 flex">
                    <h2 className="flex mr-4"> {location}</h2>
                    <h2 className="flex"> {salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
            
        </div> */
}
