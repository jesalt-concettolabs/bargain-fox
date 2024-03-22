import { useState } from "react";
import Price from "../CardSubComponent/Price";
import StarImg from "../CardSubComponent/StarImg";
import star2Img from "/assets/Polygon 2.svg";
import deleteIcon from "/assets/delete.png";
import wishIcon from "/assets/heart.png";
import Loader from "../Spinner/Spinner";

const Card2 = ({ data, btnClass }) => {
  const productImageUrl = data.product_images[0].product_image_url;
  const { description, my_sale_price, main_rrp, percentage_discount } = data;
  const [wishClicked, setWishClicked] = useState(false);
  const [loader, setLoader] = useState(false);

  const discountPrice = parseInt(percentage_discount.split("."));

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const handleWish = (e) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setWishClicked((prev) => !prev);
    }, 1000);
    e.preventDefault();
  };

  const handleCart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative bg-white flex max-w-[24rem] flex-col overflow-hidden rounded-xl  bg-clip-border text-gray-700 shadow-md">
      <div className="relative  m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        <div className="w-56 h-56">
          <img
            src={productImageUrl}
            alt="card-img"
            width="100%"
            height="100%"
            className="h-full w-full object-contain"
          />
        </div>
        <div
          className={`${
            wishClicked ? "bg-[#ff7900]" : "bg-white"
          } absolute h-8 w-8 rounded-full top-2 right-2`}
        >
          {loader ? (
            <Loader />
          ) : (
            <img
              src={`${btnClass ? `${deleteIcon}` : `${wishIcon}`}`}
              alt={description}
              width="100%"
              height="100%"
              className="rounded-full z-[999] p-2"
              onClick={btnClass ? handleDelete : handleWish}
            />
          )}
        </div>
      </div>
      <div className="px-2">
        <p
          id="mainCardTitle"
          className="block mt-3 text-sm font-semibold text-[#292D32] hover:text-[#ff7900] capitalize min-h-4"
        >
          {description}
        </p>
      </div>
      <StarImg />

      <div className="flex items-center justify-between px-2">
        <Price cardNotPrice={main_rrp} cardPrice={my_sale_price} />
        <div id="discountDiv" className="relative">
          <div id="discountImg" className="w-10 h-10">
            <img src={star2Img} alt="start2Img" width="100%" height="100%" />
          </div>
          <span
            id="discountImagePrice"
            className="absolute top-[12px] left-[10px] text-[10px]  text-white font-semibold"
          >
            {discountPrice}%
          </span>
        </div>
      </div>
      <button
        onClick={handleCart}
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
