import React, { useEffect, useState } from "react";
import correctLogo from "/assets/correctLogo.png";
import timerlogo from "/assets/timer.png";
import vanLogo from "/assets/van.png";
import warrantyLogo from "/assets/warranty.png";
import SubCard from "../components/DetailSubCard/SubCard";
import oneStar from "/assets/onestar.png";
import { Progress } from "@material-tailwind/react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import prdImg1 from "/assets/prdImg1.png";
import ProductImgSlider from "../components/ProductImageSlider/ProductImgSlider";
import { useNavigate, useParams } from "react-router-dom";
import StarImg from "../components/CardSubComponent/StarImg";
import Price from "../components/CardSubComponent/Price";
import DetailHover from "../components/CardSubComponent/DetailHover";
import { customerReviews, sizes } from "../constants/sliderSetting";
import Counter from "../components/CardSubComponent/Counter";
import axios from "axios";
import { productDetail } from "../api/constant";
import Loader from "../components/Loader/Loader";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [imageChange, setImageChange] = useState(prdImg1);
  const [productDetailData, setProductDetailData] = useState([]);
  const [counterValue, setCounterValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const { productSlug, productId } = useParams();
  const [productPath, setProductPath] = useState([]);

  console.log("product path: ", productPath);

  useEffect(() => {
    setTimeout(() => {
      if (productDetailData) {
        const itemSlug = productDetailData?.slug;
        const categorySlug = productDetailData?.category_info[0]?.slug;
        const subcategorySlug =
          productDetailData?.category_info[0]?.subcategory[0]?.slug;
        const collectionSlug =
          productDetailData?.category_info[0]?.subcategory[0]?.collection[0]
            ?.slug;

        const updatedProductPath = [];
        if (categorySlug) {
          updatedProductPath.push(categorySlug);
        }
        if (subcategorySlug) {
          updatedProductPath.push(subcategorySlug);
        }
        if (collectionSlug) {
          updatedProductPath.push(collectionSlug);
        }
        if (itemSlug) {
          updatedProductPath.push(itemSlug);
        }

        setProductPath(updatedProductPath);
      }
    }, 2000);
  }, [productDetailData]);

  const totalStarRating = `${
    productDetailData?.rating_count?.five_rating +
    productDetailData?.rating_count?.four_rating +
    productDetailData?.rating_count?.three_rating +
    productDetailData?.rating_count?.two_rating +
    productDetailData?.rating_count?.one_rating
  }`;

  const productDetailAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${productDetail}/${productSlug}/${productId}`
      );
      if (response.status === 200) {
        setLoading(false);
        setProductDetailData(response.data.result);
        console.log(response.data.result);
      } else {
        setLoading(true);
      }
    } catch (error) {
      console.log("product detail API error: ", error);
    }
  };

  useEffect(() => {
    productDetailAPI();
  }, []);

  const handleChange = (item) => {
    setImageChange(item);
  };

  const handlePlus = () => {
    setCounterValue(counterValue + 1);
  };

  const handleMinus = () => {
    setCounterValue(counterValue - 1);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="container flex flex-col gap-10">
      <section className="block lg:flex lg:gap-[50px]">
        <div className="flex lg:w-[50%]">
          <div className="flex w-[30%] flex-col gap-2">
            <ProductImgSlider onClick={handleChange} />
          </div>
          <div className="w-[70%] h-[350px] sm:w-[400px] sm:h-[500px] mx-auto">
            <img
              src={imageChange}
              alt="flowerImg"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="lg:w-[50%]">
          <div className="flex gap-6 justify-between py-2">
            <h3 className="text-sm font-normal  text-[#292D32] md:font-semibold md:text-lg">
              {productDetailData.name}
            </h3>
            <DetailHover />
          </div>
          <div className="block sm:flex sm:justify-between sm:items-center mt-2">
            <div className="flex gap-2 sm:justify-center sm:items-center">
              <StarImg rating={productDetailData?.avg_rating} />
              <span className="text-[#A4A4B8] text-lg flex text-center">
                {productDetailData?.avg_rating}
              </span>
            </div>
            <div className="text-[#292D32] text-[16px] font-semibold mt-2 sm:mt-0">
              <span className="text-[#A4A4B8] font-normal ">sold, by </span>
              Bargainfox
            </div>
          </div>
          <div className="flex items-center gap-7 py-4">
            <Price
              cardNotPrice={productDetailData?.discount_value}
              cardPrice={productDetailData?.main_rrp}
            />
            <div className="relative px-2 py-1 bg-[#2569F3] rounded-3xl text-sm text-white font-normal">
              {productDetailData?.percentage_discount}% off
            </div>
          </div>
          {productDetailData?.product_condition && (
            <div className="flex items-center text-[#A4A4B8] text-lg font-semibold">
              Condition :
              <span className="font-normal text-[#292D32]">
                {productDetailData?.product_condition.title}
              </span>
            </div>
          )}
          {productDetailData?.color?.length > 0 && (
            <div className="flex flex-col gap-1">
              <span className="flex items-center text-[#A4A4B8] text-lg font-semibold">
                Colors : <span className="font-normal text-[#292D32]">Red</span>
              </span>
              <div className="flex items-center gap-3 cursor-pointer">
                {productDetailData?.color.map((color, index) => (
                  <div
                    key={index}
                    className={`h-5 w-5 rounded-md`}
                    style={{ backgroundColor: color.variation_name }}
                  />
                ))}
              </div>
            </div>
          )}
          {productDetailData?.size?.length > 0 && (
            <div className="flex items-center gap-4 py-2">
              <span className="flex items-center text-[#A4A4B8] text-lg font-semibold ">
                Sizes:
              </span>
              <div className="flex items-center gap-4 cursor-pointer">
                {sizes.map((size, index) => (
                  <div key={index} className={`h-5 w-5 rounded-md`}>
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )}
          <Counter
            handlePlus={handlePlus}
            handleMinus={handleMinus}
            count={counterValue}
            stock={productDetailData.stock}
          />
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
            <div className="text-end py-2 text-[#292D32] text-[14px] mt-4 font-semibold">
              {productDetailData?.product_view} People looked at this product
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
            <div className="text-end py-2 text-[#292D32] text-[14px] font-semibold">
              {productDetailData?.standard_expected_delivery}
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
            <div className="flex mb-3 sm:mb-0 flex-col justify-center items-center">
              <span className="text-[60px] sm:text-[90px] font-bold">
                {productDetailData?.avg_rating}
              </span>
              <StarImg rating={productDetailData?.avg_rating} />
              <p className="text-[16px] text-[#A4A4B8] font-normal ">
                {totalStarRating} Gloabal ratings
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-2">
              {productDetailData &&
                productDetailData.rating_count &&
                Object.keys(productDetailData.rating_count).map(
                  (key, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span>{5 - index}</span>
                      <img src={oneStar} alt="oneStar" />
                      <div className="flex w-[150px] flex-col gap-4">
                        <Progress
                          value={productDetailData.rating_count[key] / 100 || 0}
                          color="blue"
                          size="sm"
                        />
                      </div>
                      <span>{productDetailData.rating_count[key]}</span>
                    </div>
                  )
                )}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-[18px] font-semibold">
              Customer Reviews (<span>{productDetailData?.total_review}</span>)
            </h4>
            {productDetailData?.review && (
              <div className="flex flex-col gap-3 py-2">
                {customerReviews.map((item) => (
                  <ReviewCard reviewDetail={item} key={item.id} />
                ))}
              </div>
            )}
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
                {productDetailData?.purchase_count} Customers bought this item
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-[#000000] font-semibold ">
              Product Description
            </h2>
            <div className="py-4 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <p className="text-sm sm:text-[16px] text-[#292D32] font-normal">
                  {productDetailData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
