import { detailHoverData } from "../../constants/dealCardData";
import shareLogo from "/assets/shareLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const DetailHover = () => {
  const [hoverDiv, setHoverDiv] = useState(false);

  return (
    <div className="relative flex flex-col justify-center">
      <div className="h-5 w-5">
        <img
          src={shareLogo}
          alt="shareLogo"
          className="cursor-pointer"
          onMouseEnter={() => setHoverDiv(true)}
          onMouseLeave={() => setHoverDiv(false)}
        />
      </div>
      <ul
        onMouseEnter={() => setHoverDiv(true)}
        onMouseLeave={() => setHoverDiv(false)}
        className={`absolute  right-1 w-36 ${
          hoverDiv ? "block" : "hidden"
        }  p-3 shadow-md bg-white border mt-[182px] max-w-sm border-gray-300 rounded-md z-[9995]`}
      >
        {detailHoverData.map((item) => (
          <Link key={item.id}>
            <li className="flex border-b pb-2 border-b-gray-200 justify-between items-center hover:text-[#ff7900]">
              {item.cardName}
              <span>
                <img src={item.cardImg} alt={item.cardName} />
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DetailHover;
