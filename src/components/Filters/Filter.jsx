import { useState } from "react";
import {
  filterCategoryNames,
  filterDiscountNames,
  filterPriceNames,
} from "../../constants/heroCardData";
import CheckboxComponent from "../Checkbox/Checkbox";

const Filter = () => {
  const [conditionCheckedValues, setConditionCheckedValues] = useState([]);
  const [discountCheckedValues, setDiscountCheckedValues] = useState([]);
  const [priceCheckedValues, setPriceCheckedValues] = useState([]);

  // console.log(
  //   "first",
  //   conditionCheckedValues,
  //   discountCheckedValues,
  //   priceCheckedValues
  // );

  const handleConditionChange = (value) => {
    setConditionCheckedValues([value]);
  };

  const handleDiscountChange = (value) => {
    setDiscountCheckedValues([value]);
  };

  const handlePriceChange = (value) => {
    setPriceCheckedValues([value]);
  };

  return (
    <>
      <CheckboxComponent
        data={filterCategoryNames}
        title={"Condition"}
        checkedValues={conditionCheckedValues}
        setCheckedValues={setConditionCheckedValues}
        handleChange={handleConditionChange}
      />
      <CheckboxComponent
        data={filterDiscountNames}
        title={"Discount"}
        checkedValues={discountCheckedValues}
        setCheckedValues={setDiscountCheckedValues}
        handleChange={handleDiscountChange}
      />
      <CheckboxComponent
        data={filterPriceNames}
        title={"Price"}
        checkedValues={priceCheckedValues}
        setCheckedValues={setPriceCheckedValues}
        handleChange={handlePriceChange}
      />
    </>
  );
};

export default Filter;
