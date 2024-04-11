import { Link } from "react-router-dom";
import noResult from "/assets/noResult.svg";

const NoDataFound = ({ title, emptyImg }) => {
  return (
    <div className="flex flex-col h-[70vh] sm:h-[60vh] justify-center items-center gap-2">
      <div className="">
        <img
          src={emptyImg ? emptyImg : noResult}
          alt="noResult"
          width="100%"
          height="100%"
        />
      </div>
      <h4 className="text-[#292D32] text-center font-semibold text-[14px] sm:text-xl">
        {title ? title : "No Product Found"}
      </h4>
      <Link to={"/"}>
        <button className="sm:px-4 sm:py-2 px-2 py-1 text-[12px] sm:text-[16px]  text-center bg-[#ff7900] text-white hover:bg-black hover:text-white rounded-[25px]">
          Return to shop
        </button>
      </Link>
    </div>
  );
};

export default NoDataFound;
