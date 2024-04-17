import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Radio } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { getUserAddress, placeOrder, shoppingCartAPI } from "../api/constant";
import axios from "axios";
import Order from "../components/OrderSummary/Order";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import Price from "../components/CardSubComponent/Price";
import PaymentCard from "../components/PaymentCard/PaymentCard";
import americanLogo from "/assets/american.png";
import visaLogo from "/assets/visa.png";
import masterLogo from "/assets/mastercard.png";
import PaymentCardForm from "../components/PaymentCard/PaymentCardForm";
import { Typography, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ThankyouModal from "../components/ThankyouModal/ThankyouModal";

const renderInput = (name, label, formik, type = "text") => (
  <>
    <Input
      required
      autoComplete="off"
      label={label}
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
      type={type}
      size="lg"
    />
    {formik.touched[name] && formik.errors[name] && (
      <Typography className="text-sm text-red-400">
        {formik.errors[name]}
      </Typography>
    )}
  </>
);

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [cartData, setCartData] = useState();
  const [open, setOpen] = useState(false);
  const [userAddress, setUserAddress] = useState();
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(1);
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

  const payNowApi = async () => {
    setLoading(true);
    try {
      let paynowdetail = {
        address_id: selectedId,
        delivery_type_id: selectedDeliveryMethod,
        shipping_address: {
          country: userAddress[0].country,
          full_name: userAddress[0].full_name,
          address: userAddress[0].address,
          address2: userAddress[0].address2,
          city: userAddress[0].city,
          state: userAddress[0].state,
          postcode: userAddress[0].postcode,
          mobile: userAddress[0].mobile,
        },
        billing_address: {
          country:
            sameAddress === "same"
              ? userAddress[0].country
              : formik?.values?.country,
          full_name:
            sameAddress === "same"
              ? userAddress[0].full_name
              : formik?.values?.full_name,
          address:
            sameAddress === "same"
              ? userAddress[0].address
              : formik?.values?.address,
          address2:
            sameAddress === "same"
              ? userAddress[0].address2
              : formik?.values?.address2,
          city:
            sameAddress === "same" ? userAddress[0].city : formik?.values?.city,
          state:
            sameAddress === "same"
              ? userAddress[0].state
              : formik?.values?.state,
          postcode:
            sameAddress === "same"
              ? userAddress[0].postcode
              : formik?.values?.postcode,
          mobile:
            sameAddress === "same"
              ? userAddress[0].mobile
              : formik?.values?.phone,
        },
      };
      const response = await axios.post(placeOrder, paynowdetail, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        setLoading(false);
        setOpen(true);
      }
    } catch (error) {
      console.log("Place order API error: ", error);
      setLoading(false);
    }
  };

  const handleDeliveryMethodChange = (method) => {
    setSelectedDeliveryMethod(method);
  };

  const handleDifferentAddress = (method) => {
    setSameAddress(method);
  };

  const handleSaveCard = (method) => {
    setSaveCard(method);
  };

  const handleModal = () => {
    setOpen(!open);
  };

  const validationSchema = Yup.object().shape({
    full_name: Yup.string().min(4).max(25).required("Full Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    address2: Yup.string()
      .max(50, "Apartment/suite number is too long")
      .required("Apartment number is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().min(4).max(25).required("City is required"),
    postcode: Yup.number().required("Postcode number is required"),
    country: Yup.string().required("Country is required"),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      address: "",
      address2: "",
      state: "",
      city: "",
      postcode: "",
      phone: "",
      country: "India",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await submitForm(values, resetForm);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const submitForm = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="container block md:flex gap-10">
      {open && <ThankyouModal open={open} onclick={handleModal} />}
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
                  checked={selectedDeliveryMethod === 1}
                  onChange={() => handleDeliveryMethodChange(1)}
                >
                  <span className="text-[#000000] font-semibold">Standard</span>
                </Radio>
                <p>{cartData.standard_expected_delivery}</p>
                <Radio
                  color="warning"
                  checked={selectedDeliveryMethod === 2}
                  onChange={() => handleDeliveryMethodChange(2)}
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
                  <form
                    noValidate
                    onSubmit={formik.handleSubmit}
                    className="grid grid-flow-row grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5"
                  >
                    <div>
                      <select
                        className="bg-transparent border border-blue-gray-200 text-blue-gray-500 text-sm rounded-lg block w-full p-2.5"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        name="country"
                      >
                        <option value="India">India</option>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="France">France</option>
                      </select>
                    </div>
                    {renderInput("full_name", "Full Name", formik)}
                    {renderInput("address", "Address", formik, "textarea")}
                    {renderInput("address2", "Apartment", formik)}
                    {renderInput("city", "City", formik)}
                    {renderInput("state", "State", formik)}
                    {renderInput("postcode", "Postcode", formik, "string")}
                    {renderInput("phone", "Phone", formik, "string")}
                  </form>
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
          <Order
            data={cartData}
            productCount={productCount}
            payment={"true"}
            onclick={
              sameAddress === "different"
                ? () => {
                    formik.handleSubmit();
                    payNowApi();
                  }
                : payNowApi
            }
          />
        )}
      </section>
    </main>
  );
};

export default Payment;
