import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/pages/App";
import SideBar from "./components/SideBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="grid grid-cols-12 gap-4 bg-black">
    <div className="col-span-2">
      <SideBar />
    </div>
    <div className="col-span-10">
      <App />
    </div>
  </div>
);