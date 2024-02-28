import React, { useState } from "react";
import { Checkbox } from "pretty-checkbox-react";

import "@djthoms/pretty-checkbox";

const discountNames = [
  {
    label: "Women's T-shirts",
  },
  {
    label: "Women's Tank Tops & Camis",
  },
  {
    label: "Women's Dresses",
  },
  {
    label: "Women's Blouses & Shirts",
  },
  {
    label: "Women's Two-piece Outfilts",
  },
  {
    label: "Women's Jumpsuits & Playsuits",
  },
  {
    label: "Women's Bottomwears",
  },
];

const Category = () => {
  //   const [checkedIndex, setCheckedIndex] = useState(null);

  //   const handleCheck = (index) => {
  //     if (checkedIndex === index) {
  //       setCheckedIndex(null);
  //     } else {
  //       setCheckedIndex(index);
  //     }
  //   };

  return (
    <main className="mt-5">
      <section>
        <span className="text-[#292D32] text-xl font-semibold">Category</span>
        <section className="mt-2 flex flex-col">
          {discountNames.map((data, index) => (
            <label
              key={index}
              class="inline-flex items-center cursor-pointer py-2"
            >
              <Checkbox
                shape="round"
                color="warning"
                id={`discount`}
                name="discount"
                className={`cursor-pointer`}
                // value={data.label}
                // checked={checkedIndex === index}
                // onChange={() => handleCheck(index)}
              />
              <span class=" text-[#000000] text-[16px] font-normal text-left ">
                {data.label} off or more
              </span>
            </label>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Category;
