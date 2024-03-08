import "./card2.scss";
import starImg from "/assets/4stars.png";
import star2Img from "/assets/Polygon 2.svg";

const Card2 = ({ data, btnClass }) => {
  const { cardImage, cardTitle, cardPrice, cardNotPrice, cardDiscount } = data;
  return (
    <div className="relative mr-2 border-2 border-green-400 flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img src={cardImage} alt="card-img" />
        <div className="absolute h-7 w-7 rounded-full bg-white top-2 right-2">
          <img
            src={cardImage}
            alt={cardPrice}
            width="100%"
            height="100%"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="p-4">
        <p id="mainCardTitle" className="block mt-3 text-sm text-[#292D32]">
          {cardTitle.slice(0, 60)}
          {cardTitle.length > 60 ? "..." : ""}
        </p>
        <div className="flex items-center pt-2">
          <img src={starImg} alt="starImg" />
        </div>
      </div>
      <div className="flex items-center justify-between px-6">
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
      <button
        className={`${
          btnClass === "true" ? "block" : "hidden"
        } p-1 bg-[#ff7900] rounded-[25px] font-semibold text-white my-1`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card2;
