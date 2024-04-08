import React, { useEffect, useState } from "react";
import correctLogo from "/assets/correctLogo.png";
import timerlogo from "/assets/timer.png";
import vanLogo from "/assets/van.png";
import personLogo from "/assets/person.svg";
import circleLogo from "/assets/Ellipse.svg";
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
  const [imageChange, setImageChange] = useState();
  const [counterValue, setCounterValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const { productSlug, productId } = useParams();

  const initialVariationData = {
    product_variation_id: null,
    avg_rating: null,
    cart_qty_count: null,
    category_id: null,
    category_info: null,
    collection_id: null,
    color: null,
    description: null,
    discount_percentage: null,
    discount_value: null,
    expected_delivery: null,
    fastfox_enabled: null,
    id: null,
    is_added_cart: null,
    is_discount_on: null,
    is_out_stock: null,
    is_purchased: null,
    is_wishlisted: null,
    main_rrp: null,
    minimum_sale_price: null,
    name: null,
    parent_id: null,
    percentage_discount: null,
    price: null,
    product_condition: null,
    product_images: null,
    product_specification: null,
    product_view: null,
    purchase_count: null,
    rating_count: null,
    review: null,
    sale_price: null,
    size: null,
    slug: null,
    standard_expected_delivery: null,
    stock: null,
    sub_category_id: null,
    total_review: null,
    unique_id: null,
    variation_list: null,
    color_name: null,
  };

  const [productDetailData, setProductDetailData] =
    useState(initialVariationData);

  console.log("product detail Data: ", productDetailData);

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
        console.log(
          "hello",
          response.data.result.product_images[0].product_image_url
        );
        setImageChange(
          response.data.result?.product_images[0]?.product_image_url
        );
        setProductDetailData({
          ...productDetailData,
          avg_rating: response.data.result.avg_rating,
          cart_qty_count: response.data.result.cart_qty_count,
          category_id: response.data.result.category_id,
          category_info: response.data.result.category_info,
          collection_id: response.data.result.collection_id,
          color: response.data.result.color,
          description: response.data.result.description,
          discount_percentage: response.data.result.discount_percentage,
          discount_value: response.data.result.discount_value,
          expected_delivery: response.data.result.expected_delivery,
          fastfox_enabled: response.data.result.fastfox_enabled,
          id: response.data.result.id,
          is_added_cart: response.data.result.is_added_cart,
          is_discount_on: response.data.result.is_discount_on,
          is_out_stock: response.data.result.is_out_stock,
          is_purchased: response.data.result.is_purchased,
          is_wishlisted: response.data.result.is_wishlisted,
          main_rrp: response.data.result.main_rrp,
          minimum_sale_price: response.data.result.minimum_sale_price,
          name: response.data.result.name,
          parent_id: response.data.result.parent_id,
          percentage_discount: response.data.result.percentage_discount,
          price: response.data.result.price,
          product_condition: response.data.result.product_condition,
          product_images: response.data.result.product_images,
          product_specification: response.data.result.product_specification,
          product_view: response.data.result.product_view,
          purchase_count: response.data.result.purchase_count,
          rating_count: response.data.result.rating_count,
          review: response.data.result.review,
          sale_price: response.data.result.sale_price,
          size: response.data.result.size,
          slug: response.data.result.slug,
          standard_expected_delivery:
            response.data.result.standard_expected_delivery,
          stock: response.data.result.stock,
          sub_category_id: response.data.result.sub_category_id,
          total_review: response.data.result.total_review,
          unique_id: response.data.result.unique_id,
          variation_list: response.data.result.variation_list,
        });
        if (
          response.data.result.variation_list &&
          response.data.result.variation_list.length > 0
        ) {
          console.log("inside variation");
          setProductDetailData((prevData) => ({
            ...prevData,
            cart_qty_count:
              response.data.result.variation_list[0].cart_qty_count,
            color_name: response.data.result.color[0]?.variation_name,
            description: response.data.result.variation_list[0].description,
            discount_value:
              response.data.result.variation_list[0].discount_value,
            is_added_cart: response.data.result.variation_list[0].is_added_cart,
            is_out_stock: response.data.result.variation_list[0].is_out_stock,
            is_purchased: response.data.result.variation_list[0].is_purchased,
            is_wishlisted: response.data.result.variation_list[0].is_wishlisted,
            main_rrp: response.data.result.variation_list[0].rrp,
            minimum_sale_price:
              response.data.result.variation_list[0].sale_price,
            name: response.data.result.variation_list[0].name,
            percentage_discount:
              response.data.result.variation_list[0].percentage_discount,
            product_condition:
              response.data.result.variation_list[0].product_condition,
            product_images:
              response.data.result.variation_list[0].product_images,
            stock: response.data.result.variation_list[0].stock,
            product_variation_id: response.data.result.variation_list[0].color,
          }));
        }
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

  const handleColorChange = (id) => {
    const selectedVariationData = productDetailData.variation_list.find(
      (variation) => variation.color === id
    );
    const selectedVariationColor = productDetailData.color.find(
      (item) => item.variation_id === id
    );
    setProductDetailData((prevData) => ({
      ...prevData,
      color_name: selectedVariationColor.variation_name,
    }));

    if (selectedVariationData) {
      setProductDetailData((prevData) => ({
        ...prevData,
        cart_qty_count: selectedVariationData.cart_qty_count,
        description: selectedVariationData.description,
        discount_value: selectedVariationData.discount_value,
        is_added_cart: selectedVariationData.is_added_cart,
        is_out_stock: selectedVariationData.is_out_stock,
        is_purchased: selectedVariationData.is_purchased,
        is_wishlisted: selectedVariationData.is_wishlisted,
        main_rrp: selectedVariationData.rrp,
        minimum_sale_price: selectedVariationData.sale_price,
        name: selectedVariationData.name,
        percentage_discount: selectedVariationData.percentage_discount,
        product_condition: selectedVariationData.product_condition,
        product_images: selectedVariationData.product_images,
        stock: selectedVariationData.stock,
        product_variation_id: selectedVariationData.color,
      }));
    }
  };

  const handelSizeChange = (id) => {
    const selectedSizeData = productDetailData.variation_list.find(
      (variation) => variation.size === id
    );
    if (selectedSizeData) {
      setProductDetailData((prevData) => ({
        ...prevData,
        cart_qty_count: selectedSizeData.cart_qty_count,
        description: selectedSizeData.description,
        discount_value: selectedSizeData.discount_value,
        is_added_cart: selectedSizeData.is_added_cart,
        is_out_stock: selectedSizeData.is_out_stock,
        is_purchased: selectedSizeData.is_purchased,
        is_wishlisted: selectedSizeData.is_wishlisted,
        main_rrp: selectedSizeData.rrp,
        minimum_sale_price: selectedSizeData.sale_price,
        name: selectedSizeData.name,
        percentage_discount: selectedSizeData.percentage_discount,
        product_condition: selectedSizeData.product_condition,
        product_images: selectedSizeData.product_images,
        stock: selectedSizeData.stock,
        product_variation_id: selectedSizeData.size,
      }));
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    productDetailData && (
      <main className="container flex flex-col gap-10">
        <section className="block lg:flex lg:gap-[50px]">
          {productDetailData.product_images &&
            productDetailData.product_images.length > 0 && (
              <div className="flex lg:w-[50%]">
                <div className="flex w-[30%] flex-col gap-2">
                  <ProductImgSlider
                    onClick={handleChange}
                    imagesData={productDetailData?.product_images}
                  />
                </div>
                <div className="w-[70%] h-[350px] sm:w-[400px] sm:h-[500px] mx-auto">
                  <img
                    src={imageChange}
                    alt="flowerImg"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
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
                  {productDetailData.avg_rating}
                </span>
              </div>
              <div className="text-[#292D32] text-[16px] font-semibold mt-2 sm:mt-0">
                <span className="text-[#A4A4B8] font-normal ">sold, by </span>
                Bargainfox
              </div>
            </div>
            <div className="flex items-center gap-7 py-4">
              <Price
                cardNotPrice={productDetailData.main_rrp}
                cardPrice={
                  productDetailData.minimum_sale_price ||
                  productDetailData.sale_price
                }
              />
              <div className="relative px-2 py-1 bg-[#2569F3] rounded-3xl text-sm text-white font-normal">
                {productDetailData.percentage_discount}% off
              </div>
            </div>
            {productDetailData.product_condition && (
              <p className="flex items-center gap-1">
                <span className="text-[#A4A4B8] text-lg font-semibold">
                  Condition:
                </span>
                <span className="font-normal text-[#292D32]">
                  {productDetailData.product_condition.title}
                </span>
              </p>
            )}
            {productDetailData.color && productDetailData.color.length > 0 && (
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1">
                  <span className="text-[#A4A4B8] text-lg font-semibold">
                    Color :
                  </span>
                  <span className="font-normal text-[#292D32]">
                    {productDetailData.color_name}
                  </span>
                </p>
                <div className="flex items-center gap-3 cursor-pointer">
                  {productDetailData.color &&
                    productDetailData?.color.map((color) => (
                      <div
                        key={color.variation_id}
                        className={`h-5 w-5 rounded-md`}
                        onClick={() => handleColorChange(color.variation_id)}
                        style={{ backgroundColor: color.variation_name }}
                      />
                    ))}
                </div>
              </div>
            )}
            {productDetailData.size && productDetailData.size.length > 0 && (
              <div className="flex items-center gap-4 py-2">
                <span className="flex items-center text-[#A4A4B8] text-lg font-semibold ">
                  Sizes:
                </span>
                <p className="flex items-center gap-4 cursor-pointer">
                  {productDetailData.size.map((item) => (
                    <span
                      key={item.variation_id}
                      className={`h-5 w-5 rounded-md`}
                      onClick={() => handelSizeChange(item.variation_id)}
                    >
                      {item.variation_name}
                    </span>
                  ))}
                </p>
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
              <div className="flex gap-4 items-center justify-end py-2  text-[#292D32] text-[14px] mt-4 font-semibold">
                <span className="flex gap-1">
                  <img src={personLogo} alt="person" />
                  <span>{productDetailData?.product_view}</span>
                </span>
                People looked at this product
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
                            value={
                              productDetailData.rating_count[key] / 100 || 0
                            }
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
                Customer Reviews (<span>{productDetailData?.total_review}</span>
                )
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
              {productDetailData?.product_specification && (
                <div className="flex flex-col gap-3">
                  {productDetailData?.product_specification.map((item) => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <img src={circleLogo} alt="circle" />
                      <p className="text-sm sm:text-[16px] text-[#292D32] flex gap-1">
                        <span className="font-bold">{item.spec_name}:</span>
                        {item.spec_value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    )
  );
};

export default ProductDetails;
