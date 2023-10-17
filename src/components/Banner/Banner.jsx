import React from "react";
import banner from "../../images/job-ss-removebg.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-violet-400">
      <div className="grid grid-cols-2 gap-4 mx-6 pb-8 pt-10">
        <div className="pt-10 ms-9">
          <h1 className="text-6xl font-bold">One Step</h1>
          <h1 className="text-6xl font-bold leading-relaxed">Closer To Your</h1>
          <h1 className="text-6xl font-bold">Dream Job</h1>
          <p className="mt-12">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-neutral mt-8 font-bold text-white"><Link to="/jobs">Apply Now</Link></button>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
