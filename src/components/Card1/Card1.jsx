import { Link } from "react-router-dom";
import "./card1.scss";

const Card1 = ({
  imageurl,
  offerName,
  offerText,
  offerClass,
  textClass,
  divClass,
  imgDivClass,
}) => {
  return (
    <div id="card1">
      <div id="imgDiv" className={`${imgDivClass}`}>
        <img src={imageurl} alt="womanimg" />
      </div>
      <div className={`flex flex-col gap-1 p-2 ${divClass} `}>
        <p className={`text-sm font-normal text-left ${offerClass}`}>
          {offerText}
        </p>
        <span
          className={`text-[#292D32] text-sm font-semibold text-left ${textClass}`}
        >
          {offerName}
        </span>
      </div>
    </div>
  );
};

export default Card1;
