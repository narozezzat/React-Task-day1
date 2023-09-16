import React from "react";
import { Card, Col, Row } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faComputer,
  faGamepad,
  faImage,
  faMicrophone,
  faRectangleAd,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <div>
      <div className="text-white my-4">
        <p className="text-[40px] font-bold flex justify-center">My Services</p>
        <p className="flex justify-center">
          My Services There are many variations of passages of Lorem Ipsum
          available, but the majority{" "}
        </p>
        <p className="flex justify-center">
          have suffered alteration in some form, by injected
        </p>
      </div>

      <div className="flex w-full justify-center gap-8 mt-8">
        <Card
          className="bg-slate-700 text-white"
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="text-yellow-400 flex justify-center text-[50px]">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <p className="flex justify-center font-bold mt-4">Web Devlopment</p>
          <p className="flex justify-center">Blog, E-commerce</p>
        </Card>
        <Card
          className="bg-slate-700 text-white"
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="text-yellow-400 flex justify-center text-[50px]">
            <FontAwesomeIcon icon={faComputer} />
          </div>
          <p className="flex justify-center font-bold mt-4">UI/UX Design</p>
          <p className="flex justify-center">Card content</p>
        </Card>
        <Card
          className="bg-slate-700 text-white"
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="text-yellow-400 flex justify-center text-[50px]">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
          <p className="flex justify-center font-bold mt-4">Sound Design</p>
          <p className="flex justify-center">Voice Over, Beat Making</p>
        </Card>
      </div>

      <div className="flex w-full justify-center gap-8 mt-8">
        <Card
          className="bg-slate-700 text-white"
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="text-yellow-400 flex justify-center text-[50px]">
            <FontAwesomeIcon icon={faGamepad} />
          </div>
          <p className="flex justify-center font-bold mt-4">Game Design</p>
          <p className="flex justify-center">Character Design, props & Objects</p>
        </Card>
        <Card
          className="bg-slate-700 text-white"
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="text-yellow-400 flex justify-center text-[50px]">
            <FontAwesomeIcon icon={faImage} />
          </div>
          <p className="flex justify-center font-bold mt-4">Photography</p>
          <p className="flex justify-center">Product Photography</p>
        </Card>
        <Card
          className="bg-slate-700 text-white"
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="text-yellow-400 flex justify-center text-[50px]">
            <FontAwesomeIcon icon={faRectangleAd} />
          </div>
          <p className="flex justify-center font-bold mt-4">Advertising</p>
          <p className="flex justify-center">Voice Over, Beat Making</p>
        </Card>
      </div>
    </div>
  );
}
