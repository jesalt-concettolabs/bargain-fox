import { useState } from "react";
import {
  filterCategoryNames,
  filterDiscountNames,
  filterPriceNames,
} from "../../constants/heroCardData";
import CheckboxComponent from "../Checkbox/Checkbox";

const Filter = () => {
  const [checkedValues, setCheckedValues] = useState({
    condition: [],
    discount: [],
    price: [],
  });

  console.log("first", checkedValues);

  const handleChange = (type, value) => {
    setCheckedValues({
      ...checkedValues,
      [type]: checkedValues[type].includes(value)
        ? checkedValues[type].filter((val) => val !== value)
        : [value],
    });
  };

  return (
    <>
      <CheckboxComponent
        data={filterCategoryNames}
        title={"Condition"}
        checkedValues={checkedValues.condition}
        handleChange={(value) => handleChange("condition", value)}
      />
      <CheckboxComponent
        data={filterDiscountNames}
        title={"Discount"}
        checkedValues={checkedValues.discount}
        handleChange={(value) => handleChange("discount", value)}
      />
      <CheckboxComponent
        data={filterPriceNames}
        title={"Price"}
        checkedValues={checkedValues.price}
        handleChange={(value) => handleChange("price", value)}
      />
    </>
  );
};

export default Filter;
