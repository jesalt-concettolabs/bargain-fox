import "./card2.scss";
import starImg from "/assets/Polygon 1.svg";
import star2Img from "/assets/Polygon 2.svg";

const Card2 = ({
  imageURL,
  cardDes,
  cardPrice,
  cardNotPrice,
  cardDiscount,
}) => {
  return (
    <div id="card2">
      <div id="imageDiv">
        <img src={imageURL} alt="card-img" />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <p className="text-[#292D32] text-sm">{cardDes}</p>
        <div id="starDiv" className="flex gap-1">
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <h5 id="price" className="text-[#292D32] text-2xl font-bold">
              <sup id="dollar" className="text-sm font-semibold">
                $
              </sup>
              {cardPrice}
            </h5>
            <span
              id="notPrice"
              className="text-[#292D32] text-sm text-center flex justify-center items-center"
            >
              <strike>${cardNotPrice}</strike>
            </span>
          </div>
          <div id="discountDiv" className="relative">
            <div id="discountImg">
              <img src={star2Img} alt="start2Img" />
            </div>
            <span
              id="discountImagePrice"
              className="absolute top-4 left-3 text-sm text-white font-semibold"
            >
              {cardDiscount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
