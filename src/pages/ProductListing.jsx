import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import closeIcon from "/assets/close.png";
import Filter from "../components/Filters/Filter";
import axios from "axios";
import { productList } from "../api/constant";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/pagination/Pagination";
import NoDataFound from "../components/NoDataFound/NoDataFound";
import Card2 from "../components/MainCard/Card2";
import Dropdown from "../components/DropDown/Dropdown";

const ProductListing = () => {
  const [activeClose, setActiveClose] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [allResponse, setAllResponse] = useState({});
  const location = useLocation();
  const { categoryId, subCategoryId, collectionId } = useParams();

  const handleFilter = () => {
    setActiveClose((prev) => !prev);
  };

  const productDataAPI = async () => {
    setLoading(true);
    try {
      const postData = {
        category_id: categoryId,
        sub_category_id: subCategoryId,
        collection_id: collectionId,
        sort_by: new URLSearchParams(location.search).get("sort_by"),
        search: new URLSearchParams(location.search).get("searchText"),
        page: new URLSearchParams(location.search).get("page"),
        per_page: 12,
        condition: new URLSearchParams(location.search).get("condition"),
        discount: new URLSearchParams(location.search).get("discount"),
        price_range: new URLSearchParams(location.search).get("price_range"),
        min_price: new URLSearchParams(location.search).get("min_price"),
        max_price: new URLSearchParams(location.search).get("max_price"),
      };

      const response = await axios.post(productList, postData);
      if (response.status === 200) {
        setAllResponse(response.data.result);
        setProductData(response.data.result.data);
        setLoading(false);
        setEmptyData(response.data.result.data.length === 0);
      }
    } catch (error) {
      console.error("Product List API Error: ", error);
    }
  };

  useEffect(() => {
    productDataAPI();
  }, [categoryId, subCategoryId, collectionId, location.search]);

  return (
    <main className="container">
      <div className="flex">
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
              {emptyData ? (
                <NoDataFound />
              ) : (
                <div
                  id="product-card-div"
                  className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                >
                  {productData.map((item, index) => (
                    <div key={index}>
                      <Link to={"/"}>
                        <Card2 data={item} />
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </div>
      {allResponse.total > 10 && (
        <div className="flex justify-center mt-6">
          <Pagination totalPage={allResponse.last_page} />
        </div>
      )}
    </main>
  );
};

export default ProductListing;
