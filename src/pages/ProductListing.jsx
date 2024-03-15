import { useState } from "react";
import Dropdown from "../components/DropDown/Dropdown";
import Card2 from "../components/MainCard/Card2";
import { Link } from "react-router-dom";
import { gardenCardData } from "../constants/gardenCardData";
import closeIcon from "/assets/close.png";
import Filter from "../components/Filters/Filter";

const ProductListing = () => {
  const [activeClose, setActiveClose] = useState(false);

  const handleFilter = () => {
    setActiveClose((prev) => !prev);
  };

  return (
    <main className="container">
      <div className="flex ">
        <section className={`lg:w-[20%] lg:pr-5 hidden lg:block`}>
          <span className="text-[#A4A4B8] text-2xl font-bold ">Filters</span>
          <Filter />
        </section>
        {/* Small screen */}
        <section
          className={`block lg:hidden ${
            activeClose ? "block container w-[100%]" : "hidden"
          }`}
        >
          <div className="flex justify-between">
            <span className="text-[#A4A4B8] text-2xl font-bold ">Filters</span>
            <div
              className={`cursor-pointer ${activeClose ? "block" : "hidden"}`}
              onClick={handleFilter}
            >
              <img
                src={closeIcon}
                alt="filterClose"
                height="20px"
                width="20px"
              />
            </div>
          </div>
          <div className="w-[100%] md:w-[70%]">
            <Filter />
          </div>
        </section>
        <section
          className={`w-[100%] lg:w-[80%] flex flex-col pl-5 ${
            activeClose ? "hidden" : "block"
          } `}
        >
          <div className="flex justify-between">
            <span className="hidden lg:block lg:text-[#292D32] lg:text-3xl lg:font-bold">
              Results
            </span>
            <div>
              <Dropdown />
            </div>
            <div className="lg:hidden flex justify-center items-center gap-2">
              <div
                className="cursor-pointer flex gap-2 justify-center items-center"
                onClick={handleFilter}
              >
                <img
                  src="https://concetto-web.bargainfox.com/images/svg/filter.svg"
                  alt="filterLogo"
                  className="w-5 h-5 sm:w-7 sm:h-7"
                />
                <span className=" text-[#292D32] text-sm sm:text-2xl font-bold ">
                  Filter
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <div
              id="product-card-div"
              className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            >
              {gardenCardData &&
                gardenCardData.map((item) => {
                  return (
                    <div key={item.id}>
                      <Link to={item.cardUrl}>
                        <Card2 data={item} />
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductListing;
