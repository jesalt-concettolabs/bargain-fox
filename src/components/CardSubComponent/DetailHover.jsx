import fbIcon from "/assets/fb.png";
import copyLinkIcon from "/assets/copyLink.png";
import emailIcon from "/assets/email.png";
import pinIcon from "/assets/pinterest.png";
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
        <Link>
          <li className="flex border-b pb-2 border-b-gray-200 justify-between items-center hover:text-[#ff7900]">
            Email
            <span>
              <img src={emailIcon} alt="emailIcon" />
            </span>
          </li>
        </Link>
        <Link>
          <li className="flex pt-1 border-b pb-2 border-b-gray-200 justify-between items-center hover:text-[#ff7900]">
            Pinterest
            <span>
              <img src={pinIcon} alt="pinIcon" />
            </span>
          </li>
        </Link>
        <Link>
          <li className="flex pt-1 border-b pb-2 border-b-gray-200 justify-between items-center hover:text-[#ff7900]">
            Facebook
            <span>
              <img src={fbIcon} alt="fbIcon" />
            </span>
          </li>
        </Link>
        <Link>
          <li className="flex pt-1 justify-between items-center hover:text-[#ff7900]">
            Copy Link
            <span>
              <img src={copyLinkIcon} alt="CopyIcon" />
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DetailHover;
