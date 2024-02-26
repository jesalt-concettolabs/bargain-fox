import { Link } from "react-router-dom";
import "./hero.scss";
import bannerImg from "/assets/banner.png";
import kitchenImg from "/assets/Image 11.png";
import healthBeautyImg from "/assets/Image 12.png";
import electronicImg from "/assets/Image 14.png";
import toysImg from "/assets/Image 15.png";
import sportsImg from "/assets/Image 17.png";
import clearnceImg from "/assets/Image 19.png";

const Hero = () => {
  return (
    <main>
      <section className="container flex items-center justify-center">
        <div
          id="hero-upperpart"
          className="flex gap-6 w-[80%] justify-center items-center pb-3"
        >
          <div
            id="part1-hero"
            className="flex gap-6 justify-center items-center text-center"
          >
            <Link to={"/"}>
              <div
                id="item1"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={kitchenImg}
                  alt="kitchenimg"
                  className="imageSize w-[90px] h-[90px]"
                />
                <span className="pt-2 font-medium text-sm">Home & Kitchen</span>
                {/* Hover hero card */}
                <div
                  id="hover-card"
                  className="hidden absolute top-[209px] p-3"
                >
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-3 h-3 bg-[#FF7900] rounded-full"></div>
                    <div
                      id="hover-list"
                      className="w-[450px] h-[305px] relative flex gap-3 bg-white rounded-xl shadow-md p-6"
                    >
                      <ul className="w-full flex flex-col gap-4 text-[16px] text-[#A4A4B8] font-semibold">
                        <li className="relative flex justify-between">
                          <Link id="activetab1" to={"/"}>
                            Home
                          </Link>
                          <ul
                            id="activesubtab1"
                            className="hidden absolute right-4 flex flex-col gap-4 text-left text-[16px] text-[#292D32] font-normal "
                          >
                            <li>
                              <Link to={"/"}>Appliances & Accessories</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Cleaning & Household</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Lighting</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Bathroom</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Bedroom</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Furnishings</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Decor</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="flex justify-between">
                          <Link
                            id="activetab2"
                            className="relative flex justify-between"
                            to={"/"}
                          >
                            Kitchen
                          </Link>
                          <ul
                            id="activesubtab2"
                            className="hidden absolute right-4 flex flex-col gap-4 text-left text-[16px] text-[#292D32] font-normal "
                          >
                            <li>
                              <Link to={"/"}>Appliances</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Utensils, Tools & Gadgets</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Cooking & Baking</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Tableware</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="flex justify-between">
                          <Link
                            className="relative flex justify-between"
                            id="activetab3"
                            to={"/"}
                          >
                            Office
                          </Link>
                          <ul
                            id="activesubtab3"
                            className="hidden absolute right-4 flex flex-col gap-4 text-left text-[16px] text-[#292D32] font-normal "
                          >
                            <li>
                              <Link to={"/"}>Storage & Organisation</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Supplies</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Printers</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Shredders</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex flex-col justify-center items-center">
              <img
                src={healthBeautyImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Health & Beauty</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={electronicImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Electronics</span>
            </div>
          </div>
          <div
            id="part2-hero"
            className="flex gap-6 justify-center items-center text-center"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={toysImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Toys & Carfts</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={sportsImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Sport & Leisure</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={clearnceImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Clearnce</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-3">
        <img src={bannerImg} alt="banner-img" width="100%" />
      </section>
    </main>
  );
};

export default Hero;
