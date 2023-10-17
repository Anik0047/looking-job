import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import DisplayAppliedJobs from "../DisplayAppliedJobs/DisplayAppliedJobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }
    

  useEffect(()=>{
    const storedJobIds = getStoredJobApplication();
    if(jobs.length > 0){
        const jobsApplied = [];
        for(const id of storedJobIds){
            const job = jobs.find(job => job.id === id);
            if(job){
                jobsApplied.push(job);
            }
        }
        setAppliedJobs(jobsApplied);
        setDisplayJobs(jobsApplied);
    }
  },[jobs])

  return (
    <div>
      <div className="banner h-60 mb-20 flex justify-center items-center text-2xl font-bold">
        <h1>Applied Jobs</h1>
      </div>
      <div className="flex justify-end pe-10 mb-14">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Filter By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li onClick={() => handleJobsFilter('all')}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter('onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      {
        displayJobs.map(job => <DisplayAppliedJobs key={job.id} job={job}></DisplayAppliedJobs>)
      }
    </div>
  );
};

export default AppliedJobs;
