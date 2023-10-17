import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-black h-80">
        <div className="grid grid-cols-8  text-white pt-14">
          <div className="col-span-3 px-20">
            <h2 className="text-xl font-bold  pb-4">Looking Job?</h2>
            <p className="pe-10 pb-5">
              <small>
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </small>
            </p>
            <span className="flex">
              <FaFacebook className="text-2xl"></FaFacebook>{" "}
              <FaTwitter className="text-2xl mx-4"></FaTwitter>{" "}
              <FaInstagramSquare className="text-2xl"></FaInstagramSquare>
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-2">Company</h2>
            <p>
              <small>About Us</small>
            </p>
            <p>
              <small>Work</small>
            </p>
            <p>
              <small>Latest News</small>
            </p>
            <p>
              <small>Careers</small>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-2">Product</h2>
            <p>
              <small>Prototype</small>
            </p>
            <p>
              <small>Plans & Pricing</small>
            </p>
            <p>
              <small>Customers</small>
            </p>
            <p>
              <small>Integrations</small>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-2">Support</h2>
            <p>
              <small>Help Desk</small>
            </p>
            <p>
              <small>Sales</small>
            </p>
            <p>
              <small>Become a Partner</small>
            </p>
            <p>
              <small>Developers </small>
            </p>
          </div>
          <div className="col-span-2">
            <h2 className="text-lg font-bold pb-2">Support</h2>
            <p className="pe-20">
              <small>Dhanmondi 32, Sukrabad Dhaka, Bangladesh</small>
            </p>
            <p>
              <small>+880-1819*****</small>
            </p>
          </div>
        </div>
        <div className="px-20 pt-10">
            <hr />
        </div>
        <div className="text-center text-slate-400">
        <small>@2023 Looking Job?. All Rights Reserved</small>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
