import React from "react";
import profile from "../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "antd";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div className="container mx-auto bg-slate-700 text-white h-screen sticky top-0">
      <div className="flex justify-center">
        <img
          src={profile}
          className="mt-4 w-24 h-24 rounded-full object-cover"
        />
      </div>

      <h4 className="flex justify-center my-4">Naroz Ezzat</h4>
      <p className="flex justify-center text-gray-400">Front End Developer</p>

      <div className="text-yellow-400 flex space-x-2 justify-center my-4">
        <span className="hover:text-white cursor-pointer"><FontAwesomeIcon icon={faFacebook} /></span>
        <span className="hover:text-white cursor-pointer"><FontAwesomeIcon icon={faTwitter} /></span>
        <span className="hover:text-white cursor-pointer"><FontAwesomeIcon icon={faLinkedin} /></span>
        <span className="hover:text-white cursor-pointer"><FontAwesomeIcon icon={faInstagram} /></span>
        <span className="hover:text-white cursor-pointer"><FontAwesomeIcon icon={faWhatsapp} /></span>
      </div>
      <hr />

      <div className="text-[13px]">
        <div className="flex justify-between my-4 mx-2">
          <p className="bg-yellow-400 w-12 flex justify-center p-1">Age</p>
          <p>24</p>
        </div>

        <div className="flex justify-between my-4 mx-2">
          <p className="bg-yellow-400 w-20 flex justify-center p-1">
            Freelancer
          </p>
          <p className="text-green-600">Available</p>
        </div>

        <div className="flex justify-between my-4 mx-2">
          <p className="bg-yellow-400 w-16 flex justify-center p-1">Address</p>
          <p>Cairo, Eygpt</p>
        </div>
      </div>

      <hr />
      <h3 className="my-4 mx-2 font-semibold">Languages</h3>

      <div className="flex justify-between mx-2">
        <p>Arabic</p>
        <p>100%</p>
      </div>

      <div className="flex justify-center mx-2">
        <Progress strokeColor="#FDD835" percent={100} showInfo={false} />
      </div>

      <div className="flex justify-between mx-2">
        <p>English</p>
        <p>70%</p>
      </div>

      <div className="flex justify-center mx-2">
        <Progress
          strokeColor="#FDD835"
          trailColor="black"
          percent={70}
          showInfo={false}
        />
      </div>

      <hr />

      <div className="mx-2 bg-yellow-400 flex justify-center p-2 mt-2">
        <button className="">Download CV</button>
        <span className="ml-1"><FontAwesomeIcon icon={faDownload} /></span>
      </div>
    </div>
  );
}
