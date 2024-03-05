import { Link } from "react-router-dom";
import "./trending.scss";
import rightArrow from "/assets/Group 24.svg";
import Card1 from "../Card1/Card1";
import speakerImg from "/assets/speaker.png";
import jarImg from "/assets/jars.png";
import jar2Img from "/assets/household_1728x.png";
import balanceToyImg from "/assets/balance-toy.png";
import watchImg from "/assets/smart-watch.png";
import joblotsImg from "/assets/job_lot_370x.png";
import catImg from "/assets/cat.png";
import clearanceImg from "/assets/artboard.png";
import trendDealsImg from "/assets/deals.png";
import trendImg from "/assets/Group 905725.png";

const Trending = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <div className="w-full flex justify-between">
          <div id="deal-heading">
            <span className="text-[#292D32] text-left font-bold text-2xl capitalize">
              Trending on bargain fox
            </span>
          </div>
          <Link to={"/"}>
            <div
              id="view-deal-head"
              className="flex gap-2 justify-center items-center"
            >
              <span className="text-[#292D32] font-semibold text-lg">
                View All
              </span>

              <img src={rightArrow} alt="right-arrow" />
            </div>
          </Link>
        </div>
        <div className="flex gap-2 justify-center items-center mt-4">
          <div id="trend1">
            <Link to={"/"}>
              <Card1
                imageurl={speakerImg}
                offerName="Electronics"
                offerText="Up to 10% off"
                offerClass="px-2 py-1 text-[16px] bg-[#FF7900] text-white font-normal rounded-2xl m-2"
                divClass=" justify-center items-center"
                imgDivClass="h-[133px] w-[133px]"
              />
            </Link>
          </div>

          <div id="trend2">
            <Link to={"/"}>
              <Card1
                imageurl={jarImg}
                offerName="Kitchen"
                offerText="Up to 50% off"
                offerClass="px-2 py-1 text-[16px] bg-[#FF7900] text-white font-normal rounded-2xl m-2"
                divClass=" justify-center items-center"
                imgDivClass="h-[133px] w-[133px]"
              />
            </Link>
          </div>
          <div id="trend3">
            <Link to={"/"}>
              <Card1
                imageurl={jar2Img}
                offerName="Home"
                offerText="Up to 10% off"
                offerClass="px-2 py-1 text-[16px] bg-[#FF7900] text-white font-normal rounded-2xl m-2"
                divClass=" justify-center items-center"
                imgDivClass="h-[133px] w-[133px]"
              />
            </Link>
          </div>
          <div id="trend4">
            <Link to={"/"}>
              <Card1
                imageurl={balanceToyImg}
                offerName="Toys & Carfts"
                offerText="Up to 50% off"
                offerClass="px-2 py-1 text-[16px] bg-[#FF7900] text-white font-normal rounded-2xl m-2"
                divClass=" justify-center items-center"
                imgDivClass="h-[133px] w-[133px]"
              />
            </Link>
          </div>
          <div id="trend5">
            <Link to={"/"}>
              <Card1
                imageurl={watchImg}
                offerName="Sports & Leisure"
                offerText="Up to 15% off"
                offerClass="px-2 py-1 text-[16px] bg-[#FF7900] text-white font-normal rounded-2xl m-2"
                divClass=" justify-center items-center"
                imgDivClass="h-[133px] w-[133px]"
              />
            </Link>
          </div>
          <div id="trend6">
            <Link to={"/"}>
              <Card1
                imageurl={joblotsImg}
                offerName="Job Lots"
                offerText="Up to 5% off"
                offerClass="px-2 py-1 text-[16px] bg-[#FF7900] text-white font-normal rounded-2xl m-2"
                divClass=" justify-center items-center"
                imgDivClass="h-[133px] w-[133px]"
              />
            </Link>
          </div>
          <div id="trend7">
            <Link to={"/"}>
              <Card1
                imageurl={catImg}
                offerName="Pets"
                offerText="Up to 10% off"
                offerClass="px-2 py-1 text-[16px] bg-[#FF7900] text-white font-normal rounded-2xl m-2"
                divClass=" justify-center items-center"
                imgDivClass="h-[133px] w-[133px]"
              />
            </Link>
          </div>
        </div>
        <div
          id="lower-trends"
          className="mt-10 pt-2 flex justify-center items-center gap-3  "
        >
          <div>
            <Link to={"/"}>
              <img src={trendImg} alt="trendimg" />
              <div className=" flex flex-col justify-center items-center mt-2">
                <h5 className="text-[#292D32] text-[22px] font-semibold">
                  Trendings
                </h5>
                <span className="text-[#FF7900] text-sm font-normal capitalize">
                  view all products
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <img src={trendDealsImg} alt="trendimg" />
              <div className=" flex flex-col justify-center items-center mt-2">
                <h5 className="text-[#292D32] text-[22px] font-semibold">
                  Deals of the week
                </h5>
                <span className="text-[#FF7900] text-sm font-normal capitalize">
                  view all products
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <img src={clearanceImg} alt="trendimg" />
              <div className=" flex flex-col justify-center items-center mt-2">
                <h5 className="text-[#292D32] text-[22px] font-semibold">
                  Clearance
                </h5>
                <span className="text-[#FF7900] text-sm font-normal capitalize">
                  view all products
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trending;
