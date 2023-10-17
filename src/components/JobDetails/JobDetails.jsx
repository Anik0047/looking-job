import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utility/localstorage";
import "./JobDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
  } = job;

  console.log(job.contact_information.phone);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    alert("You have applied successfully");
  };

  const iconLocation = <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>;
  const iconDolarSign = <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>;
  const iconBriefcase = <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>;
  const iconMail = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
  const iconPhone = <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>;

  return (
    <div>
      <div className="banner h-60 flex justify-center items-center text-2xl font-bold">
        <h1>Job Details</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-4 mx-10 my-10">
        <div className=" md:col-span-3 px-8">
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            <span className="text-slate-500">{job_description}</span>
          </p>
          <p className="my-6">
            <span className="font-bold">Job Responsibility:</span>{" "}
            <span className="text-slate-500">{job_responsibility}</span>
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>{" "}
            <span className="text-slate-500">{educational_requirements}</span>
          </p>
          <p className="my-6">
            <span className="font-bold">Experiences:</span>{" "}
            <span className="text-slate-500">{experiences}</span>
          </p>
        </div>
        <div className="">
          <div className="bg-color px-4">
            <p className="font-bold py-2">Job Details</p>
            <hr />
            <p className="py-3"><small><span>{iconDolarSign}</span> <span className="font-bold">Salary: </span>{salary} (Per Month)</small></p>
            <p className=""><small><span>{iconBriefcase}</span> <span className="font-bold">Job Title: </span>{job_title}</small></p>
            <p className="font-bold py-4">Contact Information</p>
            <hr />
            <p className="py-3"><small><span>{iconPhone}</span> <span className="font-bold">Phone: </span>{job.contact_information.phone}</small></p>
            <p className=""><small><span>{iconMail}</span> <span className="font-bold">Email: </span>{job.contact_information.email}</small></p>
            <p className="py-3"><small><span>{iconLocation}</span> <span className="font-bold">Address: </span>{job.contact_information.address}</small></p>
          </div>
          <button onClick={handleApplyJob} className="btn btn-primary w-full mt-5 button border-0">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
