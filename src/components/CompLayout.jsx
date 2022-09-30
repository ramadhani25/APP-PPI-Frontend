import React from "react";
import { Outlet } from "react-router-dom";
import CompFooter from "./CompFooter";
import CompHeader from "./CompHeader";

const CompLayout = () => {
  return (
    <div className="w-full min-h-screen bg-fixed flex flex-col justify-between bg-[url('assets/bg.jpg')] bg-cover">
      <CompHeader />
      <div className="h-full p-4 pt-16">
        <Outlet />
      </div>
      <CompFooter />
    </div>
  );
};

export default CompLayout;
