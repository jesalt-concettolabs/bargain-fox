import { Link } from "react-router-dom";
import "./hero.scss";
import bannerImg from "/assets/banner.png";
import kitchenImg from "/assets/Image 11.png";
import healthBeautyImg from "/assets/Image 12.png";
import electronicImg from "/assets/Image 14.png";
import toysImg from "/assets/Image 15.png";
import sportsImg from "/assets/Image 17.png";
import clearnceImg from "/assets/Image 19.png";
import { useState } from "react";

const Hero = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <main>
      <section className="container flex items-center justify-center">
        <div
          id="hero-upperpart"
          className="flex  gap-6 w-[80%] justify-center items-center pb-3"
        >
          <div
            id="part1-hero"
            className="flex h-[130px] gap-6 justify-center items-center text-center"
          >
            <div
              className="item1  h-[130px] relative flex flex-col"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <Link to={"/"}>
                <div className=" flex flex-col justify-center items-center">
                  <img
                    src={kitchenImg}
                    alt="kitchenimg"
                    className="imageSize w-[90px] h-[90px]"
                  />
                  <span className="pt-2 font-medium text-sm">
                    Home & Kitchen
                  </span>
                </div>
              </Link>
              <div
                id="hover-circle"
                className="flex justify-center items-center"
              >
                <div
                  className={`${
                    isHovered1 ? "h-3 w-3 bg-[#FF7900] rounded-full" : ""
                  }`}
                ></div>
              </div>
              {/* Hover-Card */}
              <div
                id="hover-div"
                className="flex flex-col justify-center xl:items-center items-start mt-28 p-10"
              >
                <div
                  className={` absolute w-[450px] h-[300px] bg-[#fff] rounded-3xl flex flex-col  ${
                    isHovered1 ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <ul className="flex flex-col p-5">
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive1(true)}
                        onMouseLeave={() => setIsActive1(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 || isActive3
                              ? "text-[#A4A4B8]"
                              : "text-[#292D32]"
                          } `}
                        >
                          Home
                        </Link>
                        <ul
                          className={`inActive absolute  ${
                            isActive2 || isActive3 ? "inActive" : "Active"
                          }`}
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
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive2(true)}
                        onMouseLeave={() => setIsActive2(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 ? "text-[#292D32]" : ""
                          }`}
                        >
                          Kitchen
                        </Link>

                        <ul
                          className={`inActive absolute ${
                            isActive2 ? "Active top-[-39px]" : ""
                          } `}
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
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive3(true)}
                        onMouseLeave={() => setIsActive3(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive3 ? "text-[#292D32]" : ""
                          }`}
                        >
                          Office
                        </Link>
                        <ul
                          className={`inActive absolute ${
                            isActive3 ? "Active top-[-80px] right-[60px]" : ""
                          } `}
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

            <div
              className="item2 h-[130px] relative flex flex-col"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <Link to={"/"}>
                <div className=" flex flex-col justify-center items-center">
                  <img
                    src={healthBeautyImg}
                    alt="kitchenimg"
                    className="imageSize w-[90px] h-[90px]"
                  />
                  <span className="pt-2 font-medium text-sm">
                    Health & Beauty
                  </span>
                </div>
              </Link>
              <div
                id="hover-circle"
                className="flex justify-center items-center"
              >
                <div
                  className={`${
                    isHovered2 ? "h-3 w-3 bg-[#FF7900] rounded-full" : ""
                  }`}
                ></div>
              </div>
              {/* Hover-Card */}
              <div
                id="hover-div"
                className="flex flex-col justify-center items-center mt-28 p-10"
              >
                <div
                  className={`absolute w-[450px] h-[300px] bg-[#fff] rounded-3xl flex flex-col  ${
                    isHovered2 ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <ul className="flex flex-col p-5">
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive1(true)}
                        onMouseLeave={() => setIsActive1(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 || isActive3
                              ? "text-[#A4A4B8]"
                              : "text-[#292D32]"
                          } `}
                        >
                          Health
                        </Link>
                        <ul
                          className={`inActive absolute  ${
                            isActive2 || isActive3
                              ? "inActive"
                              : "Active right-[-10px] "
                          }`}
                        >
                          <li>
                            <Link to={"/"}> Shaving & Hair Removal</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Oral Care</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Massage & Relaxation</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Medical & Mobility</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Sexual Pleasure & Wellbeing</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive2(true)}
                        onMouseLeave={() => setIsActive2(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 ? "text-[#292D32]" : ""
                          }`}
                        >
                          Beauty
                        </Link>
                        <ul
                          className={`inActive absolute ${
                            isActive2 ? "Active top-[-39px] right-[60px]" : ""
                          } `}
                        >
                          <li>
                            <Link to={"/"}>Skincare & Beauty</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Hair Care & Styling</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive3(true)}
                        onMouseLeave={() => setIsActive3(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive3 ? "text-[#292D32]" : ""
                          }`}
                        >
                          Baby & Kids
                        </Link>
                        <ul
                          className={`inActive absolute ${
                            isActive3 ? "Active top-[-80px] right-[90px]" : ""
                          } `}
                        >
                          <li>
                            <Link to={"/"}>Baby Products</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Kids</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="item3 h-[130px] relative flex flex-col"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <Link to={"/"}>
                <div className=" flex flex-col justify-center items-center">
                  <img
                    src={electronicImg}
                    alt="kitchenimg"
                    className="imageSize w-[90px] h-[90px]"
                  />
                  <span className="pt-2 font-medium text-sm">Electronics</span>
                </div>
              </Link>
              <div
                id="hover-circle"
                className="flex justify-center items-center"
              >
                <div
                  className={`${
                    isHovered3 ? "h-3 w-3 bg-[#FF7900] rounded-full" : ""
                  }`}
                ></div>
              </div>
              {/* Hover-Card */}
              <div
                id="hover-div"
                className="flex flex-col justify-center items-center mt-28 p-10"
              >
                <div
                  className={`absolute w-[450px] h-[300px] bg-[#fff] rounded-3xl flex flex-col  ${
                    isHovered3 ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <ul className="flex flex-col p-5">
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive1(true)}
                        onMouseLeave={() => setIsActive1(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 || isActive3
                              ? "text-[#A4A4B8]"
                              : "text-[#292D32]"
                          } `}
                        >
                          Computing
                        </Link>
                        <ul
                          className={`inActive absolute  ${
                            isActive2 || isActive3
                              ? "inActive"
                              : "Active right-[10px] "
                          }`}
                        >
                          <li>
                            <Link to={"/"}>Computing & Accessories</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Phones & Tablets</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Audio & Visual</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Gaming</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive2(true)}
                        onMouseLeave={() => setIsActive2(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 ? "text-[#292D32]" : ""
                          }`}
                        >
                          Appliances
                        </Link>
                        <ul
                          className={`inActive absolute ${
                            isActive2 ? "Active top-[-35px] right-[35px]" : ""
                          } `}
                        >
                          <li>
                            <Link to={"/"}>Kitchen Appliances</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Heating, Cooling & Air</Link>
                          </li>
                          <li>
                            <Link to={"/"}> Home Appliances</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="part2-hero"
            className="flex gap-6 justify-center items-center text-center"
          >
            <div
              className="item4 h-[130px] relative flex flex-col"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <Link to={"/"}>
                <div className="flex  flex-col justify-center items-center">
                  <img
                    src={toysImg}
                    alt="kitchenimg"
                    className="imageSize w-[90px] h-[90px]"
                  />
                  <span className="pt-2 font-medium text-sm">
                    Toys & Carfts
                  </span>
                </div>
              </Link>
              <div
                id="hover-circle"
                className="flex justify-center items-center"
              >
                <div
                  className={`${
                    isHovered4 ? "h-3 w-3 bg-[#FF7900] rounded-full" : ""
                  }`}
                ></div>
              </div>
              {/* Hover-Card */}
              <div
                id="hover-div"
                className="flex flex-col justify-center items-center mt-28 p-10"
              >
                <div
                  className={`absolute w-[450px] h-[300px]  bg-[#fff] rounded-3xl flex flex-col  ${
                    isHovered4 ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <ul className="flex flex-col p-5">
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive1(true)}
                        onMouseLeave={() => setIsActive1(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 || isActive3
                              ? "text-[#A4A4B8]"
                              : "text-[#292D32]"
                          } `}
                        >
                          Toys & Games
                        </Link>
                        <ul
                          className={`inActive absolute  ${
                            isActive2 || isActive3
                              ? "inActive"
                              : "Active right-[10px] "
                          }`}
                        >
                          <li>
                            <Link to={"/"}>Games & Puzzles</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Outdoor & Sports Toys</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Educational Toys</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Dolls & Figures</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive2(true)}
                        onMouseLeave={() => setIsActive2(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 ? "text-[#292D32]" : ""
                          }`}
                        >
                          Crafts & Party
                        </Link>
                        <ul
                          className={`inActive absolute ${
                            isActive2 ? "Active top-[-35px] right-[20px]" : ""
                          } `}
                        >
                          <li>
                            <Link to={"/"}>Arts & Crafts</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Fancy Dress & Party</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="item5 h-[130px] relative flex flex-col"
              onMouseEnter={() => setIsHovered5(true)}
              onMouseLeave={() => setIsHovered5(false)}
            >
              <Link to={"/"}>
                <div className="flex  flex-col justify-center items-center">
                  <img
                    src={sportsImg}
                    alt="kitchenimg"
                    className="imageSize w-[90px] h-[90px]"
                  />
                  <span className="pt-2 font-medium text-sm">
                    Sport & Leisure
                  </span>
                </div>
              </Link>
              <div
                id="hover-circle"
                className="flex justify-center items-center"
              >
                <div
                  className={`${
                    isHovered5 ? "h-3 w-3 bg-[#FF7900] rounded-full" : ""
                  }`}
                ></div>
              </div>
              {/* Hover-Card */}
              <div
                id="hover-div"
                className="flex flex-col justify-center items-end xl:items-center mt-28 p-10"
              >
                <div
                  className={`absolute w-[450px] h-[300px]  bg-[#fff] rounded-3xl flex flex-col  ${
                    isHovered5 ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <ul className="flex flex-col p-5">
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive1(true)}
                        onMouseLeave={() => setIsActive1(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 || isActive3
                              ? "text-[#A4A4B8]"
                              : "text-[#292D32]"
                          } `}
                        >
                          Sports & Games
                        </Link>
                        <ul
                          className={`inActive absolute  ${
                            isActive2 || isActive3
                              ? "inActive"
                              : "Active right-[-20px]"
                          }`}
                        >
                          <li>
                            <Link to={"/"}>Watersports</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Ball Sports</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Outdoor & Sporting Toys</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Bikes, Scooters & Ride-Ons</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Traning & Fitness</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive2(true)}
                        onMouseLeave={() => setIsActive2(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px] ${
                            isActive2 ? "text-[#292D32]" : ""
                          }`}
                        >
                          Travel & Camping
                        </Link>
                        <ul
                          className={`inActive absolute ${
                            isActive2 ? "Active top-[-35px] right-[25px] " : ""
                          } `}
                        >
                          <li>
                            <Link to={"/"}>Luggage & Travel</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Camping & Outdoor</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Caravans & Campers</Link>
                          </li>
                          <li>
                            <Link to={"/"}>Motors</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="relative flex justify-between text-[18px] text-[#A4A4B8] font-semibold py-2"
                        onMouseEnter={() => setIsActive3(true)}
                        onMouseLeave={() => setIsActive3(false)}
                      >
                        <Link
                          to={"/"}
                          className={`font-semibold text-[16px]  ${
                            isActive3 ? "text-[#292D32]" : ""
                          }`}
                        >
                          Garden & DIY
                        </Link>
                        <ul
                          className={`inActive absolute ${
                            isActive3 ? "Active top-[-75px] right-[130px] " : ""
                          } `}
                        >
                          <li>
                            <Link to={"/"}>Garden</Link>
                          </li>
                          <li>
                            <Link to={"/"}>DIY</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="item6 h-[130px] relative flex flex-col"
              onMouseEnter={() => setIsHovered6(true)}
              onMouseLeave={() => setIsHovered6(false)}
            >
              <Link to={"/"}>
                <div className="flex  flex-col justify-center items-center">
                  <img
                    src={clearnceImg}
                    alt="kitchenimg"
                    className="imageSize w-[90px] h-[90px]"
                  />
                  <span className="pt-2 font-medium text-sm">Clearnce</span>
                </div>
              </Link>
              <div
                id="hover-circle"
                className="flex justify-center items-center"
              >
                <div
                  className={`${
                    isHovered6 ? "h-3 w-3 bg-[#FF7900] rounded-full" : ""
                  }`}
                ></div>
              </div>
              {/* Hover-Card */}
              {/* <div id="hover-div">
                <div
                  className={`absolute bg-[#fff] rounded-3xl flex flex-col  ${
                    isHovered6 ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <ul className="flex flex-col gap-4 p-5">
                      <li className="flex gap-5">
                        <Link to={"/"}>Home</Link>
                        <ul>
                          <li>Hello World</li>
                          <li>Hello World</li>
                          <li>Hello World</li>
                          <li>Hello World</li>
                        </ul>
                      </li>
                      <li>
                        <Link to={"/"}>Kitchen</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Office</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto">
        <img src={bannerImg} alt="banner-img" width="100%" />
      </section>
    </main>
  );
};

export default Hero;
