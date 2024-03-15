import {
  filterCategoryNames,
  filterDiscountNames,
  filterPriceNames,
} from "../../constants/heroCardData";
import CheckboxComponent from "../Checkbox/Checkbox";

const Filter = () => {
  return (
    <>
      <CheckboxComponent data={filterCategoryNames} title={"Category"} />
      <CheckboxComponent data={filterDiscountNames} title={"Discount"} />
      <CheckboxComponent data={filterPriceNames} title={"Price"} />
    </>
  );
};

export default Filter;
