import { useState, useRef, useEffect } from "react";
import "../Header/navbar.scss";
import searchIcon from "/assets/search-normal.svg";
import searchArrow from "/assets/search-arrow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { productList } from "../../api/constant";
import Spinner from "../Spinner/Spinner";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [dataFound, setDataFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        setSearchData([]);
        setDataFound(false);
        setSearchValue("");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchSearch = async (value) => {
    setLoading(true);
    try {
      const response = await axios.post(productList, { search: value });
      if (response.data.result.data.length === 0) {
        setDataFound(true);
      } else {
        setDataFound(false);
      }
      if (response.status === 200) {
        setSearchData(response.data.result.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("search data error: ", error);
    }
  };

  const handleChange = (value) => {
    setSearchValue(value);
    if (value === "") {
      setSearchData([]);
    } else {
      fetchSearch(value);
    }
  };

  const handleSearch = () => {
    setSearchData([]);
    setDataFound(false);
    if (searchValue) {
      let path = "/search";
      path += `?searchText=${searchValue}`;
      navigate(path);
      setSearchValue("");
    }
  };

  return (
    <div className="relative" ref={searchBarRef}>
      <div
        id="search-bar"
        className="flex w-[500px] items-center border-2 border-solid border-[#F5F5FC] rounded-[10px"
      >
        <input
          type="text"
          className="h-[35px] p-1 outline-none text-[#707070] w-[95%]"
          id="search-input"
          value={searchValue}
          autoComplete="off"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search Products"
        />
        <button
          onClick={handleSearch}
          className="bg-[#FF7900] outline-none p-2 rounded-r-lg w-[35px] h-[35px] flex justify-center items-center"
        >
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>
      {searchData.length > 0 && (
        <div>
          {loading ? (
            <div className="absolute flex w-full justify-center">
              <Spinner />
            </div>
          ) : dataFound ? (
            <p className="absolute flex w-full justify-center text-[#292D32]">
              No search result found
            </p>
          ) : (
            <div
              id="search-data"
              className="absolute w-[500px] h-auto max-h-[400px] overflow-y-auto rounded-b-md flex flex-col gap-3 bg-white z-[999999] p-2"
            >
              {searchData.map((item, index) => {
                return (
                  <Link
                    to={`/product-detail/${item.slug}/${item.unique_id}?sku=${item.sku}`}
                    key={index}
                    onClick={() => {
                      setSearchData([]), setSearchValue("");
                    }}
                  >
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex gap-5">
                        <img
                          src={item.product_images[0].product_image_url}
                          alt={item.name}
                          width={25}
                          style={{ maxHeight: "25px", borderRadius: "20px" }}
                        />
                        <p>{item.name}</p>
                      </div>
                      <img src={searchArrow} alt="search-arrow" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
