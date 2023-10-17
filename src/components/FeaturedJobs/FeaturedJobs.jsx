import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/jobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [datalength, setDatalength] = useState(6);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
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
      <div className="grid grid-cols-3 gap-6 mx-5 justify-items-center">
        {jobs.slice(0, datalength).map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
      <div className="text-center mt-8">
        <div className={datalength === jobs.length ? "hidden" : ""}>
          <button onClick={() => setDatalength(jobs.length)} className="btn btn-primary button border-0">Show All</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
