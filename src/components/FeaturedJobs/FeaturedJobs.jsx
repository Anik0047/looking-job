import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/jobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [datalength, setDatalength] = useState(6);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(jobs);
    } else if (filter === "remote") {
      const remoteJobs = jobs.filter((job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = jobs.filter((job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  // console.log(displayJobs);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {setJobs(data),setDisplayJobs(data)});
  }, []);

  return (
    <div className="py-28">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Featured Jobs</h1>
        <p className="text-slate-500 mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      {/* ------------------ */}
      <div className="flex justify-end pe-10 mb-14">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Filter By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---------------------------- */}

      <div className="grid grid-cols-3 gap-6 mx-5 justify-items-center">
        { displayJobs.slice(0, datalength).map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
        {/* {
          displayJobs.map(job=> <Jobs key={job.id} ></Jobs>)
        } */}
      </div>
      <div className="text-center mt-8">
        {/* <div className={datalength === jobs.length ? "hidden" : ""}> */}
        <div>

        {
          datalength === jobs.length ? 
          <button
          onClick={() => setDatalength(6)}
          className="btn btn-primary button border-0"
        >
          Show less
        </button> : 
        <button
            onClick={() => setDatalength(jobs.length)}
            className="btn btn-primary button border-0"
          >
            Show All
          </button>
        }

          {/* <button
            onClick={() => setDatalength(jobs.length)}
            className="btn btn-primary button border-0"
          >
            Show All
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
