import "./card2.scss";
import starImg from "/assets/4stars.png";
import star2Img from "/assets/Polygon 2.svg";

const Card2 = ({
  imageURL,
  cardDes,
  cardPrice,
  cardNotPrice,
  cardDiscount,
}) => {
  return (
    <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img src={imageURL} alt="card-img" />
      </div>
      <div className="p-4">
        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-[#292D32]">
          {cardDes.slice(0, 60)}
          {cardDes.length > 60 ? "..." : ""}
        </p>
        <div className="flex items-center py-2">
          <img src={starImg} alt="starImg" />
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center ">
          <div className="flex gap-2">
            <h5 id="price" className="text-[#292D32] text-2xl font-bold">
              <sup id="dollar" className="text-sm md:text-xl font-semibold">
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
  );
};

export default Card2;
