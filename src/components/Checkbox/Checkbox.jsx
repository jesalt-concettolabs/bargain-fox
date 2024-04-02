import React from "react";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

const CheckboxComponent = ({ data, title, checkedValues, handleChange }) => {
  const handleCheck = (label) => {
    handleChange(label);
  };

  return (
    <main className="mt-5">
      <section className="flex flex-col gap-3">
        <span className="text-[#292D32] text-xl font-semibold">{title}</span>
        <section className="mt-2 flex flex-col gap-4">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <Checkbox
                shape="round"
                color="warning"
                id={index}
                name="filter"
                className={`cursor-pointer`}
                value={item.slug}
                checked={checkedValues.includes(item.slug)}
                onChange={() => handleCheck(item.slug)}
              >
                <span className="ml-2">{item.label}</span>
              </Checkbox>
            </React.Fragment>
          ))}
        </section>
      </section>
    </main>
  );
};

export default CheckboxComponent;
