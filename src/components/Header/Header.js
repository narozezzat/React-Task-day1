import React from "react";
import background from "../../assets/images/background.png";

export default function Header() {
  return (
    <div className="bg-slate-700 text-white">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[44px] font-bold pt-10 pl-8">I'm Naroz Ezzat</h1>
          <h1 className="text-[44px] font-bold pl-8">
            <span className="text-yellow-400">Front-End </span>
            Developer
          </h1>
          <p className="pl-8 w-25 text-[14px]">
            It is a long established fact that a reader will <br /> distracted
            by the readable content of a page <br /> when looking at its
            layout.
          </p>
          <button className="py-2 px-5 rounded bg-yellow-400 m-8 text-black">
            HIRE ME
          </button>
        </div>
        <div>
          <img src={background} />
        </div>
      </div>
    </div>
  );
}
