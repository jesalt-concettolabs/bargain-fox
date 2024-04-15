import { useEffect, useState } from "react";
import Order from "../components/OrderSummary/Order";
import { addToCart, deleteCartProduct, shoppingCartAPI } from "../api/constant";
import Loader from "../components/Loader/Loader";
import emptyImg from "/assets/empty-cart.svg";
import NoDataFound from "../components/NoDataFound/NoDataFound";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/CardSubComponent/Counter";
import Price from "../components/CardSubComponent/Price";
import { addCounterValue } from "../reducers/counterDetailSlice";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [cartDetails, setCartDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [productCounterValues, setProductCounterValues] = useState({});
  const productCount = useSelector((state) => state.counterValueDetail);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const cartAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        shoppingCartAPI,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setCartDetails(response.data.result);
        setLoading(false);

        const counters = {};
        response.data.result.user_cart.forEach((item) => {
          counters[item.id] = item.quantity;
        });
        setProductCounterValues(counters);
      }
    } catch (error) {
      console.log("Cart API error: ", error);
    }
  };

  useEffect(() => {
    cartAPI();
  }, []);

  const handleCartDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.post(
        deleteCartProduct,
        { cart_product_id: [id] },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setLoading(false);
        toast.success("Product deleted successfully");
        setCartDetails(response.data.result);
        dispatch(addCounterValue(response.data.result.user_cart.length));
      }
    } catch (error) {
      setLoading(false);
      console.log("Delete Cart Product API error : ", error);
    }
  };

  const addToCartApi = async (
    productId,
    variationId,
    counterValue,
    plusCount
  ) => {
    const cartData = {
      product_id: productId,
      quantity: plusCount ? counterValue + 1 : counterValue - 1,
      product_variation_id: variationId,
    };

    console.log(cartData);

    const response = await axios.post(addToCart, cartData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 200) {
      if (plusCount) {
        toast.success("Product is added to cart");
      } else {
        toast.success("Product is removed from cart");
      }
      cartAPI();
    }
  };

  const handlePlus = (id, variationId, productId) => {
    const plusCount = true;
    const currentValue = productCounterValues[id] || 0;
    addToCartApi(productId, variationId, currentValue, plusCount);
    if (currentValue < 15) {
      setProductCounterValues((prevValues) => ({
        ...prevValues,
        [id]: currentValue + 1,
      }));
    }
  };

  const handleMinus = (id, variationId, productId) => {
    const currentValue = productCounterValues[id] || 0;
    addToCartApi(productId, variationId, currentValue);
    if (currentValue > 1) {
      setProductCounterValues((prevValues) => ({
        ...prevValues,
        [id]: currentValue - 1,
      }));
    }
  };

  if (token && loading) {
    return <Loader />;
  }

  if (!token && loading) {
    return navigate("/");
  }

  return (
    cartDetails &&
    (cartDetails.user_cart.length > 0 ? (
      <main className="container block md:flex gap-5">
        <section className="w-full md:w-[75%] mb-8 md:mb-0 flex flex-col gap-5">
          <div>
            <h2 className="text-[#292D32] font-bold text-3xl ">
              Shopping Cart
            </h2>
          </div>
          {cartDetails.user_cart &&
            cartDetails.user_cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col xl:flex-row justify-between gap-2 border-2 border-[#f2f2f2] p-2"
              >
                <div className="w-full xl:w-[80%]">
                  <div className="flex gap-2 sm:gap-4">
                    {item.product_info.product_images && (
                      <div className="h-20 w-[30%] sm:h-36 sm:w-28 md:h-36 md:w-36 rounded-lg">
                        <img
                          src={
                            item.product_info.product_images[0]
                              .product_image_url
                          }
                          alt="shoppingcart-image"
                          className="w-full h-full "
                        />
                      </div>
                    )}
                    <div className="w-2/3">
                      <div>
                        <p
                          id="shoppingCartName"
                          className="text-[#292D32] text-sm md:text-[18px]"
                        >
                          {item.product_info.name}
                        </p>

                        {item.product_info.sale_price &&
                          item.product_info.main_rrp && (
                            <div className="flex items-center justify-between pt-4">
                              <div className="flex items-center gap-3 ">
                                <Price
                                  cardPrice={item.product_info.sale_price}
                                  cardNotPrice={item.product_info.main_rrp}
                                />
                                <span className="text-[#2569F3]">
                                  {item.product_info.percentage_discount > 0
                                    ? `${item.product_info.percentage_discount}%`
                                    : ""}
                                </span>
                              </div>
                            </div>
                          )}
                      </div>
                      <div className="hidden sm:flex sm:gap-4">
                        <Counter
                          count={productCounterValues[item.id] || 0}
                          handleMinus={() =>
                            handleMinus(
                              item.id,
                              item.product_variation_id,
                              item.product_info.id
                            )
                          }
                          handlePlus={() =>
                            handlePlus(
                              item.id,
                              item.product_variation_id,
                              item.product_info.id
                            )
                          }
                          stock={15}
                        />
                        <button
                          onClick={() => handleCartDelete(item.id)}
                          className="text-[18px] font-semibold text-[#292D32] p-1 border border-[#f2f2f2]"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sm:hidden flex flex-col gap-2 ">
                    <Counter
                      count={productCounterValues[item.id] || 0}
                      handleMinus={() =>
                        handleMinus(item.id, item.product_variation_id)
                      }
                      handlePlus={() =>
                        handlePlus(item.id, item.product_variation_id)
                      }
                      stock={15}
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleCartDelete(item.id)}
                        className=" font-semibold text-[#292D32] p-1 border border-[#f2f2f2]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full xl:w-[20%] xl:gap-7 xl:items-end">
                  {item.product_info.product_condition && (
                    <div className="font-semibold">
                      <span className="text-[#A4A4B8]">Condition: </span>
                      {item.product_info.product_condition.title}
                    </div>
                  )}
                  <div className="text-[#A4A4B8]">
                    sold, by
                    <span className="font-semibold text-[#292D32]">
                      {" "}
                      {item.product_info.vendor_info.trading_name},{" "}
                    </span>
                    <span className="text-[#0063FF] ">
                      {item.product_info.stock} left
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </section>
        <section className="w-full md:w-[25%] flex items-center flex-col gap-5 border-2 border-solid border-[#f2f2f8]">
          <h6 className="text-[#292D32] font-semibold text-xl ">
            Order Summary
          </h6>
          {cartDetails && (
            <Order data={cartDetails} productCount={productCount} />
          )}
        </section>
      </main>
    ) : (
      <NoDataFound title={"Your Cart is Empty"} emptyImg={emptyImg} />
    ))
  );
};

export default ShoppingCart;
