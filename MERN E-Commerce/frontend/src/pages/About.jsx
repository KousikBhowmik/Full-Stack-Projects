import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox.jsx";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row  gap-16">
        <img className="w-full max-w-[450px] " src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut
            iure ad error, deserunt molestias quos nobis voluptatem ex, officia
            dolor ratione voluptate neque aut Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odio, aliquam? dicta, cumque dolores
            quaerat magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            voluptate explicabo accusantium nesciunt voluptates dolore aliquam
            non, minus a, iusto adipisci magnam nostrum consectetur culpa veniam
            ipsam optio facere sunt.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quam molestias sequi minus ullam quae deserunt ex libero?
            Cupiditate, odit! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Esse, aliquam.
          </p>
        </div>
      </div>
      <div className="text-xl py-4  ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row mb-20 text-sm">
        <div className="border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
            corrupti aspernatur impedit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5">
          <b>Convenicene: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
            corrupti aspernatur impedit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20  flex flex-col gap-5">
          <b>Exemptional Customer Sercive: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
            corrupti aspernatur impedit.
          </p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  );
};

export default About;
