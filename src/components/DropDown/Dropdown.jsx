import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Dropdown = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchText = params.get("searchText");
  const initialSelectedValue = params.get("sort_by") || "top_customes_reviews";
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);
  const navigate = useNavigate();
  const { categoryId, subCategoryId, collectionId } = useParams();

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    setSelectedValue(filterValue);

    if (searchText) {
      let path = "/search-result";
      path += `/?searchText=${searchText}`;
      path += `&?sort_by=${filterValue}`;
      navigate(path);
    } else {
      let path = "";
      if (categoryId) {
        path += `/${categoryId}`;
      }
      if (subCategoryId) {
        path += `/${subCategoryId}`;
      }
      if (collectionId) {
        path += `/${collectionId}`;
      }
      path += `/?sort_by=${filterValue}`;
      navigate(path);
    }
  };

  useEffect(() => {
    const newParams = new URLSearchParams(location.search);
    const newSelectedValue = newParams.get("sort_by") || "top_customes_reviews";
    setSelectedValue(newSelectedValue);
  }, [location.search]);

  return (
    <div className="flex justify-center items-center border rounded-2xl p-1">
      <span className="md:block text-[#A4A4B8] text-sm pr-2 hidden">
        Sort by:
      </span>
      <div>
        <select
          value={selectedValue}
          onChange={handleFilter}
          className="py-2 px-4 block w-full bg-transparent rounded-lg text-sm disabled:opacity-50 outline-none"
        >
          <option value="lowest_price">Lowest Price</option>
          <option value="highest_price">Highest Price</option>
          <option value="top_customes_reviews">Top Customers Reviews</option>
          <option value="most_recent">Most Recent</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
