import { Link } from "react-router-dom";
import "./deals.scss";

import rightArrow from "/assets/Group 24.svg";
import DealSilder from "../DealSlider/DealSilder";

const Deals = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 justify-center items-center mt-6">
        <div className="w-full flex justify-between">
          <div id="deal-heading" className="flex">
            <span className="text-[#292D32] text-left font-bold text-2xl capitalize pr-4">
              Deals of the Day
            </span>
            {/* <sub className="text-[#A4A4B8] text-[16px]  pr-2">Ends in</sub>
            <div className="flex gap-1 justify-center items-center">
              <h2 className="h-10 w-10 p-1 bg-[#2569F3] flex text-sm rounded-md flex-col justify-center items-center text-white">
                11 <span className="text-sm">Hours</span>
              </h2>
              <h2 className="h-10 w-10 p-1 bg-[#2569F3] flex text-sm rounded-md flex-col justify-center items-center text-white">
                05 <span className="text-sm">Mins</span>
              </h2>
              <h2 className="h-10 w-10 p-1 bg-[#2569F3] flex text-sm rounded-md flex-col justify-center items-center text-white">
                19 <span className="text-sm">Secs</span>
              </h2>
            </div> */}
          </div>
          <div
            id="view-deal-head"
            className="flex gap-2 justify-center items-center"
          >
            <span className="text-[#292D32] font-semibold text-lg">
              View All Deals
            </span>
            <Link to={"/"}>
              <img src={rightArrow} alt="right-arrow" />
            </Link>
          </div>
        </div>
        <DealSilder />
      </section>
    </main>
  );
};

export default Deals;
