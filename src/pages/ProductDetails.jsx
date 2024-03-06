import React, { useState } from "react";
import flowerImg from "/assets/flowers.png";
import shareLogo from "/assets/shareLogo.png";
import correctLogo from "/assets/correctLogo.png";
import starLogo from "/assets/4stars.png";
import timerlogo from "/assets/timer.png";
import vanLogo from "/assets/van.png";
import warrantyLogo from "/assets/warranty.png";
import SubCard from "../components/DetailSubCard/SubCard";
import oneStar from "/assets/onestar.png";
import { Progress } from "@material-tailwind/react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import prdImg1 from "/assets/prdImg1.png";
import prdImg2 from "/assets/prdImg2.png";
import prdImg3 from "/assets/prdImg3.png";
import prdImg4 from "/assets/prdImg4.png";
import prdImg5 from "/assets/prdImg5.png";
import prdImg6 from "/assets/prdImg6.png";
import ProductImgSlider from "../components/ProductImageSlider/ProductImgSlider";
import Breadcrumb from "../components/BreadsScrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";

const colors = ["#F76F3D", "#000000", "#327E07", "#8185E8", "#1B3497"];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const producrDesc = [
  "Stylish design: Fashionable lapel coat with a solid color that will never go out of style",
  "Versatile: Perfect for fall and winter, suitable for both casual and formal occasions",
  "Comfortable: Made of high-quality materials that are soft and cozy to wear",
  "Convenient: Equipped with pockets to keep your hands warm or store small items",
  "Easy to match: V-neck design makes it easy to match with different outfits",
];

const ratingDetails = [
  {
    id: "1",
    ratingStar: "5",
    totalRating: "2546",
  },
  {
    id: "2",
    ratingStar: "4",
    totalRating: "5238",
  },
  {
    id: "3",
    ratingStar: "3",
    totalRating: "8232",
  },
  {
    id: "4",
    ratingStar: "2",
    totalRating: "3124",
  },
  {
    id: "5",
    ratingStar: "1",
    totalRating: "2145",
  },
];

const customerImages = [flowerImg, flowerImg, flowerImg, flowerImg];

const customerReviews = [
  {
    id: 1,
    imgUrl: flowerImg,
    custName: "Celina Peterburg",
    ratingDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed atque, impedit modi veniam sunt corrupti earum perspiciatis, aliquam natus esse cupiditate quia libero blanditiis, omnis fugiat similique in ducimu",
    ratingStar: starLogo,
    ratingDate: "10 July 2021",
  },
  {
    id: 2,
    imgUrl: flowerImg,
    custName: "loremhkjhk",
    ratingDesc:
      "A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much. Low price . Love it !",
    ratingStar: starLogo,
    ratingDate: "10 July 2021",
  },
  {
    id: 3,
    imgUrl: flowerImg,
    custName: "ewgfnlanfclknc",
    ratingDesc:
      "A very good quality fabric top. Same as shown. Fitting is just perfect. And as expected. All over I liked this top very much. Low price . Love it !",
    ratingStar: starLogo,
    ratingDate: "10 July 2021",
  },
];

const ProductDetails = () => {
  const navigate = useNavigate();
  const [imageChange, setImageChange] = useState(prdImg1);
  const handleChange = (item) => {
    setImageChange(item);
  };
  return (
    <main className="container flex flex-col gap-10">
      <section className="block lg:flex lg:gap-[50px]">
        <div className="flex lg:w-[50%]">
          <div className="flex w-[30%] flex-col gap-2">
            <ProductImgSlider onClick={handleChange} />
          </div>
          <div className="w-[70%] h-[350px] sm:w-[400px] sm:h-[500px] mx-auto">
            <img src={imageChange} alt="flowerImg" className="w-full h-full" />
          </div>
        </div>
        <div className="lg:w-[50%]">
          <div className="flex gap-6 justify-between py-2">
            <h3 className="text-sm font-normal  text-[#292D32] md:font-semibold md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              nam tempora ut eligendi repudiandae animi ea, minus quae sed eum,
              voluptatum nisi maxime suscipit. Velit doloremque amet illo
              explicabo ut.
            </h3>
            <div className="relative flex flex-col justify-center">
              <div className="h-5 w-5">
                <img
                  src={shareLogo}
                  alt="shareLogo"
                  className="cursor-pointer "
                />
              </div>
              <ul className="absolute hidden bg-white border mt-40 max-w-sm border-gray-300 rounded">
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
              </ul>
            </div>
          </div>
          <div className="block sm:flex sm:justify-between sm:items-center mt-2">
            <div className="flex gap-2 sm:justify-center sm:items-center">
              <img src={starLogo} alt="starLogo" />
              <span className="text-[#A4A4B8] text-lg flex text-center">0</span>
            </div>
            <div className="text-[#292D32] text-[16px] font-semibold mt-2 sm:mt-0">
              <span className="text-[#A4A4B8] font-normal ">sold, by </span>
              Bargainfox
            </div>
          </div>
          <div className="flex items-center gap-7 py-4">
            <div className="flex items-center ">
              <div className="flex gap-2">
                <h5
                  id="price"
                  className="text-[#292D32] text-3xl font-semibold"
                >
                  <sup id="dollar" className="text-sm md:text-xl font-semibold">
                    $
                  </sup>
                  {15}
                </h5>
                <span
                  id="notPrice"
                  className="text-[#292D32] text-sm  text-center flex justify-center items-center"
                >
                  <strike>${10}</strike>
                </span>
              </div>
            </div>
            <div
              id="discountDiv"
              className="relative px-2 py-1 bg-[#2569F3] rounded-3xl text-sm text-white font-normal"
            >
              65% off
            </div>
          </div>
          <div className="flex gap-4 py-2">
            <span className="flex items-center text-[#A4A4B8] text-lg font-semibold ">
              Colors:
            </span>
            <div className="flex justify-center items-center gap-3 cursor-pointer">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`h-5 w-5 rounded-md`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-4 py-2">
            <span className="flex items-center text-[#A4A4B8] text-lg font-semibold ">
              Sizes:
            </span>
            <div className="flex justify-center items-center gap-4 cursor-pointer">
              {sizes.map((size, index) => (
                <div key={index} className={`h-5 w-5 rounded-md`}>
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="py-3 flex gap-4">
            <span className="flex items-center font-semibold text-[18px] text-[#A4A4B8] ">
              Quantity:
            </span>

            <div className="relative flex items-center max-w-[8rem] border border-gray-300 rounded-sm">
              <button className=" text-2xl flex items-center border-r-gray-300 hover:bg-gray-200 border rounded-s-lg p-3 h-8">
                -
              </button>
              <div className="bg-gray-50 border-x-0 p-3 h-8  text-gray-900 text-lg flex items-center">
                0
              </div>
              <button className=" text-2xl flex items-center border-l-gray-300 hover:bg-gray-200 border rounded-e-lg p-3 h-8 ">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex md:flex-col">
            <div className="flex flex-col md:flex-row gap-3 py-4">
              <SubCard
                imageURL={vanLogo}
                title="Free delivery on orders over £50."
              />
              <SubCard imageURL={timerlogo} title="Free 45 day returns." />
              <SubCard
                imageURL={warrantyLogo}
                title="6 month warranty with the Bargain Fox guarantee"
              />
            </div>
            <div className="py-2 flex gap-3 justify-between items-center">
              <button
                onClick={() => navigate("/")}
                className="bg-[#FF7900] py-1 text-white hover:bg-black border border-[#ff7900] hover:border-none hover:text-white font-normal rounded-[25px] w-full"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="bg-[#FF79001A] py-1 transition-all ease-in-out border border-[#FF7900] hover:bg-[#ff7900] hover:text-white  w-full rounded-[25px]"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex lg:flex-row lg:gap-[50px]">
        <div className="lg:w-[50%] flex flex-col">
          <h3 className="text-2xl text-[#000000] font-semibold ">
            Customer Reviews
          </h3>
          <div className="block sm:flex justify-evenly items-center">
            <div className="flex mb-3 sm:mb-0 flex-col gap-3 justify-center items-center">
              <span className="text-[60px] sm:text-[90px] font-bold">4</span>
              <img src={starLogo} alt="4starsLogo" />
              <p className="text-[16px] text-[#A4A4B8] font-normal ">
                46,546 Gloabal ratings
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-2">
              {ratingDetails.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <span>{item.ratingStar}</span>
                  <img src={oneStar} alt="oneStar" />
                  <div className="flex w-[150px] flex-col gap-4">
                    <Progress
                      value={item.totalRating / 100}
                      color="blue"
                      size="sm"
                    />
                  </div>
                  <span>{item.totalRating}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-[18px] font-semibold">Customer Photos</h3>
            <div className="flex flex-wrap gap-3 py-2">
              {customerImages.map((img, index) => (
                <div
                  key={index}
                  className="w-[65px] h-[65px] sm:w-[100px] sm:h-[100px] rounded-md object-contain"
                >
                  <img src={img} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-[18px] font-semibold">Customer Reviews</h4>
            <div className="flex flex-col gap-3 py-2">
              {customerReviews.map((item) => (
                <ReviewCard reviewDetail={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <div>
            <h1 className="text-2xl text-[#000000] font-semibold ">
              Highlight
            </h1>
            <div className="flex gap-3 py-6">
              <img src={correctLogo} alt="correctLogo" />
              <span className="font-normal text-[16px] text-[#292D32] flex items-center">
                80+ Customers bought this item
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-[#000000] font-semibold ">
              Product Description
            </h2>
            <div className="py-4 flex flex-col gap-3">
              {producrDesc.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <div className="h-2 w-2 rounded-full bg-white border border-[#ff7900]"></div>
                  <p className="text-sm sm:text-[16px] text-[#292D32] font-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
