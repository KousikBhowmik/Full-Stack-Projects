import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pb-2">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="w-32 wb-5" />
          <p className="w-full text-gray-600 sm:w-2/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vel obcaecati in nulla dolor ab veritatis.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery </li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9089862174</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center"> Copyright 2024@ forever.com - All Right Resercved</p>
      </div>
    </div>
  );
};

export default Footer;
