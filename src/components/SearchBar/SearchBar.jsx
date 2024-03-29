import { useState } from "react";
import "../Header/navbar.scss";
import searchIcon from "/assets/search-normal.svg";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue) {
      let path = "/search-result";
      path += `/?searchText=${searchValue}`;
      navigate(path);
      setSearchValue("");
    }
  };
  return (
    <div
      id="search-bar"
      className="flex w-[500px] items-center border-2 border-solid border-[#F5F5FC] rounded-[10px]"
    >
      <input
        type="text"
        className="h-[35px] p-1 outline-none text-[#707070] w-[95%]"
        id="search-input"
        value={searchValue}
        autoComplete="off"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Products"
      />
      <button
        onClick={handleSearch}
        className="bg-[#FF7900] outline-none p-2 rounded-r-lg w-[35px] h-[35px] flex justify-center items-center"
      >
        <img src={searchIcon} alt="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
