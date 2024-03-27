import React, { useState } from "react";
import { Link } from "react-router-dom";

const HoverDiv = ({ data }) => {
  const [activeList, setActiveList] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveList(index);
  };

  const handleMouseLeave = (index) => {
    setActiveList(index);
  };

  return (
    <div className="absolute py-3 z-[999] bg-white w-max h-auto top-40 -left-28 mt-2 rounded-[25px]">
      <div className="flex gap-24 justify-between px-8 py-3">
        <div>
          <ul>
            {data.map(({ id, title, slug }, index) => (
              <Link to={`product-list/${slug}`} key={id}>
                <li
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={`${
                    activeList === index
                      ? "text-[#292D32] bg-[#f5f5fc]"
                      : "text-[#A4A4B8]"
                  } font-semibold pb-3 px-2 text-[18px]`}
                >
                  {title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          {activeList !== null && (
            <ul className="flex flex-col gap-3">
              {data[activeList].collection.map(({ id, title, slug }) => (
                <Link to={`product-list/${slug}`} key={id}>
                  <li className="text-[#292D32] hover:text-[#ff7900] text-[16px] font-normal">
                    {title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverDiv;
