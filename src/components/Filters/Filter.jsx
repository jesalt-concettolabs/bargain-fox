import { useState, useEffect } from "react";
import {
  filterCategoryNames,
  filterDiscountNames,
  filterPriceNames,
} from "../../constants/heroCardData";
import CheckboxComponent from "../Checkbox/Checkbox";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Filter = () => {
  const [checkedValues, setCheckedValues] = useState({
    condition: [],
    discount: [],
    price: [],
  });
  const { categoryId, subCategoryId, collectionId } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const searchText = params.get("searchText");
  const sortBy = params.get("sort_by");

  useEffect(() => {
    const minPrice = checkedValues.price?.[0]
      ? checkedValues.price[0].split("-")[0]
      : "";
    const maxPrice = checkedValues.price?.[0]
      ? checkedValues.price[0].split("-")[1]
      : "";

    let path = "";
    const { condition, discount, price } = checkedValues;
    if (condition.length > 0) {
      path += `&condition=${condition[0]}`;
    }
    if (discount.length > 0) {
      path += `&discount=${discount[0]}`;
    }
    if (price.length > 0) {
      path += `&price_range=${price[0]}&min_price=${minPrice}&max_price=${maxPrice}`;
    }
    if (searchText && sortBy) {
      navigate(`?searchText=${searchText}&page=1${path}&sort_by=${sortBy}`);
    } else if (searchText) {
      navigate(`?searchText=${searchText}&page=1${path}`);
    } else if (sortBy) {
      navigate(`?page=1${path}&sort_by=${sortBy}`);
    } else if (path) {
      navigate(`?page=1${path}`);
    } else {
      if (categoryId) {
        path += `/${categoryId}`;
      }
      if (subCategoryId) {
        path += `/${subCategoryId}`;
      }
      if (collectionId) {
        path += `/${collectionId}`;
      }
      if (`${window.location.pathname}${window.location.search}` != path) {
        navigate(path);
      }
    }
  }, [checkedValues, searchText]);

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
