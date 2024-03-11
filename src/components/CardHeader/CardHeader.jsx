import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "/assets/Group 24.svg";

const CardHeader = ({ cardTitle }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div id="deal-heading" className="flex">
        <span className="text-[#292D32] text-left sm:font-bold font-normal sm:text-2xl capitalize pr-4">
          {cardTitle}
        </span>
      </div>
      <Link to={"/"}>
        <div
          id="view-deal-head"
          className="flex gap-2 justify-center items-center"
        >
          <span className="text-[#292D32] capitalize sm:font-semibold text-sm font-normal sm:text-lg">
            view All
          </span>
          <img src={rightArrow} alt="right-arrow" />
        </div>
      </Link>
    </div>
  );
};

export default CardHeader;
