import React from "react";
import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/jobs";

const AllJobs = () => {
  const jobs = useLoaderData();

  return (
    <div className="py-28">
      <div className="grid grid-cols-3 gap-6 mx-5 justify-items-center">
        {jobs.map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
