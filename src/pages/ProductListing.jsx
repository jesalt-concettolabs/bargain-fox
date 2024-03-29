import { useEffect, useState } from "react";
import Dropdown from "../components/DropDown/Dropdown";
import Card2 from "../components/MainCard/Card2";
import { Link, useLocation, useParams } from "react-router-dom";
import closeIcon from "/assets/close.png";
import Filter from "../components/Filters/Filter";
import axios from "axios";
import { productList } from "../api/constant";
import Loader from "../components/Loader/Loader";

const ProductListing = () => {
  const [activeClose, setActiveClose] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const sort_by = location.search.slice(9);
  const searchText = params.get("searchText");

  const { categoryId, subCategoryId, collectionId } = useParams();

  const handleFilter = () => {
    setActiveClose((prev) => !prev);
  };

  const productDataAPI = async () => {
    setLoading(true);
    try {
      let postData = {};
      if (categoryId) {
        postData.category_id = categoryId;
      }
      if (subCategoryId) {
        postData.sub_category_id = subCategoryId;
      }
      if (collectionId) {
        postData.collection_id = collectionId;
      }
      if (sort_by) {
        postData.sort_by = sort_by;
      }
      if (searchText) {
        postData.search = searchText;
      }

      const response = await axios.post(productList, postData);
      if (response.status === 200) {
        setProductData(response.data.result.data);
        setLoading(false);
        if (response.data.result.data.length === 0) {
          setEmptyData(true);
        } else {
          setEmptyData(false);
        }
      }
    } catch (error) {
      console.log("Product List API Error: ", error);
    }
  };

  useEffect(() => {
    productDataAPI();
  }, [categoryId, subCategoryId, collectionId, searchText, sort_by]);

  if (emptyData) {
    return (
      <h1 className="h-[80vh] w-[100vw] text-[#292D32] flex justify-center items-center">
        No Data Found
      </h1>
    );
  }

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
          {loading ? (
            <div className="w-[70vw] h-[60vh] flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-5">
              <div
                id="product-card-div"
                className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
              >
                {productData.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link to={"/"}>
                        <Card2 data={item} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProductListing;
