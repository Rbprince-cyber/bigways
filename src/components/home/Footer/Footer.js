import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import {FaShippingFast} from "react-icons/fa"
import { belowfooter, footerData } from "../../../constants";
import { NavLink, useLocation } from "react-router-dom";



const Footer = () => {
  const location = useLocation();
  return (
    <div className="w-full bg-[#2f2f30] py-20 text-white">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2 text">
          <FooterListTitle title="BigWays - Your choice and your ways." />
          <div className="flex flex-col gap-6">
            <p className="text-sm w-full xl:w-[80%]">
            Check Availability & Pricing Online & In Real-Time With Our 
            Easy-To-Use Logistics Platform. Enjoy Hassle-Free Global Shipping 
            with Our Customs Clearance and Value Protect Offerings. Easy Booking.
            </p>
            <ul className="flex items-center gap-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="About"/>
          <ul className="flex flex-col gap-2 text-sm">
          <>
                  {footerData.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="font-titleFont hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Help" />
          <ul className="flex flex-col gap-2 text-sm">
          <>
                  {belowfooter.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="font-titleFont hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Hurry let's do shopping..." />
          <div>
          <FaShippingFast size={70}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
