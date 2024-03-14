import React, { useState } from "react";
import { Checkbox } from "pretty-checkbox-react";
import star1 from "/assets/1star.png";
import star2 from "/assets/2stars.png";
import star3 from "/assets/3stars.png";
import star4 from "/assets/4stars.png";
import "@djthoms/pretty-checkbox";

const discountNames = [
  {
    imgUrl: star4,
  },
  {
    imgUrl: star3,
  },
  {
    imgUrl: star2,
  },
  {
    imgUrl: star1,
  },
];

const CustomerReview = () => {
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleCheck = (index) => {
    if (checkedIndex === index) {
      setCheckedIndex(null);
    } else {
      setCheckedIndex(index);
    }
  };

  return (
    <main className="mt-5">
      <section>
        <span className="text-[#292D32] text-xl font-semibold">
          Customer Reviews
        </span>
        <section className="mt-2 flex flex-col">
          {discountNames.map((data, index) => (
            <label
              htmlFor={index}
              key={index}
              className="inline-flex items-center cursor-pointer py-2"
            >
              <Checkbox
                shape="round"
                color="warning"
                id={`discount`}
                name="discount"
                className={`cursor-pointer`}
                value={data.label}
                checked={checkedIndex === index}
                onChange={() => handleCheck(index)}
              />
              <img src={data.imgUrl} alt="imgs" />
              <span className=" pl-2 text-[#000000] text-[16px] font-normal text-left ">
                & up
              </span>
            </label>
          ))}
        </section>
      </section>
    </main>
  );
};

export default CustomerReview;
