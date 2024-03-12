import Price from "../CardSubComponent/Price";
import StarImg from "../CardSubComponent/StarImg";
import star2Img from "/assets/Polygon 2.svg";

const Card2 = ({ data, btnClass }) => {
  const { cardImage, cardTitle, cardPrice, cardNotPrice, cardDiscount } = data;
  return (
    <div className="relative mr-6 flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative  m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <img src={cardImage} alt="card-img" width="100%" height="100%" />
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
      <div className="px-2">
        <p id="mainCardTitle" className="block mt-3 text-sm text-[#292D32]">
          {cardTitle.slice(0, 60)}
          {cardTitle.length > 60 ? "..." : ""}
        </p>
        <StarImg />
      </div>
      <div className="flex items-center justify-between px-2">
        <Price cardNotPrice={cardNotPrice} cardPrice={cardPrice} />
        <div id="discountDiv" className="relative">
          <div id="discountImg" className="w-10 h-10">
            <img src={star2Img} alt="start2Img" width="100%" height="100%" />
          </div>

          <span
            id="discountImagePrice"
            className="absolute top-[12px] left-[10px] text-[10px] text-white font-semibold"
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
