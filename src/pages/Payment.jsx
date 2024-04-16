import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Radio } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { getUserAddress, shoppingCartAPI } from "../api/constant";
import axios from "axios";
import Order from "../components/OrderSummary/Order";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import Price from "../components/CardSubComponent/Price";
import PaymentCard from "../components/PaymentCard/PaymentCard";
import americanLogo from "/assets/american.png";
import visaLogo from "/assets/visa.png";
import masterLogo from "/assets/mastercard.png";
import NewAddressForm from "../components/AddressComp/NewAddressForm";
import PaymentCardForm from "../components/PaymentCard/PaymentCardForm";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [cartData, setCartData] = useState();
  const [userAddress, setUserAddress] = useState();
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] =
    useState("standard");
  const [sameAddress, setSameAddress] = useState("same");
  const [saveCard, setSaveCard] = useState("notSave");
  const productCount = useSelector((state) => state.counterValueDetail);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedId = location.state.selectedId;

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
        setCartData(response.data.result);
        setLoading(false);
        console.log("shopping cart API", response);
      }
    } catch (error) {
      setLoading(false);
      console.log("Cart API error: ", error);
    }
  };

  const getUserAddressApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(getUserAddress, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        const filteredAddress = response.data.result.filter(
          (item) => item.id == selectedId
        );
        setUserAddress(filteredAddress);
        setLoading(false);
      }
    } catch (error) {
      console.log("Get use Address API error: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    cartAPI();
    getUserAddressApi();
  }, []);

  const handleDeliveryMethodChange = (method) => {
    setSelectedDeliveryMethod(method);
  };

  const handleDifferentAddress = (method) => {
    setSameAddress(method);
  };

  const handleSaveCard = (method) => {
    setSaveCard(method);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="container block md:flex gap-10">
      <section className="w-full md:w-[75%] mb-8 md:mb-0 flex flex-col gap-7">
        <h2 className="text-[#292D32] font-bold text-3xl">Payment</h2>
        <div className="block md:flex md:gap-10">
          <section className="w-full md:w-[65%] mb-8 md:mb-0 flex flex-col gap-5">
            <h3 className="text-xl text-[#A4A4B8] font-semibold">
              Delivery Address
            </h3>
            {userAddress && (
              <div className=" flex flex-col gap-6">
                <div className="text-[#292D32] ml-5">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {userAddress[0].full_name}
                  </h3>
                  <p className="font-normal capitalize flex flex-wrap">
                    {`${userAddress[0].address}, ${userAddress[0].address2}, ${userAddress[0].state}, ${userAddress[0].country}, ${userAddress[0].postcode}`}
                  </p>
                  <h5 className="text-[14px] sm:text-[18px] font-bold">
                    Phone Number:
                    <span className="font-normal">
                      {" "}
                      {userAddress[0].mobile}
                    </span>
                  </h5>
                </div>
                <p
                  className="text-[#0063FF] font-semibold cursor-pointer text-right text-[18px]"
                  onClick={() => navigate("/checkout/address")}
                >
                  Change Address
                </p>
              </div>
            )}
          </section>
          <section className="w-full md:w-[35%] flex  flex-col gap-5">
            <h3 className="text-xl text-[#A4A4B8] font-semibold">
              Delivery Method
            </h3>
            {cartData && (
              <div className="flex flex-col flex-wrap gap-3">
                <Radio
                  color="warning"
                  checked={selectedDeliveryMethod === "standard"}
                  onChange={() => handleDeliveryMethodChange("standard")}
                >
                  <span className="text-[#000000] font-semibold">Standard</span>
                </Radio>
                <p>{cartData.standard_expected_delivery}</p>
                <Radio
                  color="warning"
                  checked={selectedDeliveryMethod === "express"}
                  onChange={() => handleDeliveryMethodChange("express")}
                >
                  <span className="text-[#000000] font-semibold">Express</span>
                </Radio>
                <p>{cartData.express_expected_delivery}</p>
              </div>
            )}
          </section>
        </div>
        <div>
          <h3 className="text-[#292D32] font-bold">
            Item Details ({productCount.counterValue})
          </h3>
          <div className="grid grid-flow-row grid-cols-2 gap-10 sm:flex sm:flex-wrap w-full">
            {cartData &&
              cartData.user_cart &&
              cartData.user_cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-1 border-2 border-solid border-[#f2f2fc]"
                >
                  {item.product_info.product_images && (
                    <div className="h-20 w-[70%] sm:h-36 sm:w-28 md:h-36 md:w-36 border-2 border-solid border-[#F5F5FC] rounded-3xl">
                      <img
                        src={
                          item.product_info.product_images[0].product_image_url
                        }
                        alt="shoppingcart-image"
                        className="w-full h-full rounded-2xl"
                      />
                    </div>
                  )}
                  <Price
                    cardPrice={item.product_info.sale_price}
                    cardNotPrice={item.product_info.main_rrp}
                  />
                  <div className="text-[#292D32] flex items-center gap-1">
                    <span className="text-[#A4A4B8] font-semibold">Qty: </span>
                    {item.quantity}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-[#292D32] font-bold text-3xl">Payment Method</h2>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center">
                <Radio
                  color="warning"
                  checked={saveCard === "save"}
                  onChange={() => handleSaveCard("save")}
                ></Radio>

                <span className="text-[#000000] font-semibold">
                  Your Saved Cards
                </span>
              </div>
              {saveCard == "save" && (
                <div className="flex items-start mt-4 ml-4">
                  <PaymentCard />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center ">
                <Radio
                  color="warning"
                  checked={saveCard === "notSave"}
                  onChange={() => handleSaveCard("notSave")}
                ></Radio>
                <div className="text-[#000000] font-semibold flex gap-3 items-center">
                  <span>Debit/Credit Card </span>
                  <div className="flex gap-1">
                    <span className="h-8 w-11">
                      <img
                        src={visaLogo}
                        alt="cardLogo"
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="h-8 w-11">
                      <img
                        src={masterLogo}
                        alt="cardLogo"
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="h-8 w-11">
                      <img
                        src={americanLogo}
                        alt="cardLogo"
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </div>
                </div>
              </div>
              {saveCard == "notSave" && (
                <div className="flex items-start mt-4 ml-4">
                  <PaymentCardForm />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-[#292D32] font-bold text-3xl">Billing Address</h2>
          <div className="flex flex-col gap-6">
            <Radio
              color="warning"
              checked={sameAddress === "same"}
              onChange={() => handleDifferentAddress("same")}
            >
              <span className="text-[#000000] font-semibold">
                Same as Delivery Address
              </span>
            </Radio>
            <div className="flex flex-col gap-6">
              <Radio
                color="warning"
                checked={sameAddress === "different"}
                onChange={() => handleDifferentAddress("different")}
              >
                <span className="text-[#000000] font-semibold">
                  Use Different Address
                </span>
              </Radio>
              {sameAddress == "different" && (
                <div className="flex items-start mt-4 ml-4">
                  <NewAddressForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:w-[25%] flex flex-col gap-5">
        <h6 className="text-[#292D32] font-semibold text-xl capitalize">
          Order Summary
        </h6>
        {cartData && (
          <Order data={cartData} productCount={productCount} payment={"true"} />
        )}
      </section>
    </main>
  );
};

export default Payment;
