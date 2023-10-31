import React from "react";
import banner from "../../images/job-ss-removebg.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-violet-400">
      <div className="grid grid-cols-2 md:gap-4 md:mx-6 pb-8 md:pt-10">
        <div className="pt-10 ms-3 md:ms-9">
          <h1 className="text-xl md:text-6xl font-bold">One Step</h1>
          <h1 className="text-xl md:text-6xl font-bold md:leading-relaxed">Closer To Your</h1>
          <h1 className="text-xl md:text-6xl font-bold">Dream Job</h1>
          <p className="text-sm md:text-base my-3 md:my-12 ">
            <small className="md:text-xl">Discover numerous job opportunities with comprehensive information and streamline your job applications.</small>
          </p>
          <button className="btn btn-neutral  font-bold text-white"><Link to="/jobs">Apply Now</Link></button>
        </div>
        <div className="flex justify-center items-center">
          <img src={banner} alt=""  className="h-56 md:h-fit"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
