import { useState } from "react";
import Price from "../CardSubComponent/Price";
import StarImg from "../CardSubComponent/StarImg";
import star2Img from "/assets/Polygon 2.svg";
import deleteIcon from "/assets/delete.png";
import wishIcon from "/assets/heart.png";
import Loader from "../Spinner/Spinner";
import OTPVerification from "../../pages/OTPVerification";
import SignupForm from "../../pages/SignupForm";
import LoginForm from "../../pages/LoginForm";
import { manageWishListDetail } from "../../api/constant";
import axios from "axios";
import { toast } from "react-toastify";
import { addCartCounterValue } from "../../reducers/cartCounterSlice";
import { useSelector, useDispatch } from "react-redux";

const Card2 = ({ data, btnClass, handleDelete }) => {
  const productImageUrl = data.product_images[0].product_image_url;
  const {
    description,
    my_sale_price,
    main_rrp,
    percentage_discount,
    sale_price,
    id,
  } = data;
  const [wishClicked, setWishClicked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const wishCount = useSelector((state) => state.cartCounterDetail);
  const dispatch = useDispatch();

  const handleBtn = (e) => {
    setShow(false);
    e.stopPropagation();
  };

  const handleSignupClose = (e) => {
    setShowSignup(false);
    e.stopPropagation();
  };

  const handleOtp = () => {
    setShow(false);
    setShowOtp(true);
  };

  const handleVerify = () => {
    setShowOtp(false);
    setShowSignup(true);
  };

  const handleOTPClose = (e) => {
    setShowOtp(false);
    e.stopPropagation();
  };

  const discountPrice = parseInt(percentage_discount.split("."));
  const token = localStorage.getItem("token");

  const manageWishCard = async (id, action) => {
    try {
      const response = await axios.post(
        manageWishListDetail,
        { product_id: id, action: action },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Added to Wishlist successfully");
        dispatch(addCartCounterValue(wishCount + 1));
      }
    } catch (error) {
      console.log("Manage wishlist API error: ", error);
    }
  };

  const handleWish = (e, id) => {
    if (token) {
      e.preventDefault();
      const action = "add";
      manageWishCard(id, action);
    } else {
      e.preventDefault();
      setShow(true);
    }
  };

  return (
    <main>
      {show && (
        <LoginForm
          show={show}
          handleClose={(e) => handleBtn(e)}
          handleOtp={(e) => handleOtp(e)}
        />
      )}
      {showOtp && (
        <OTPVerification
          show={showOtp}
          handleVerify={(e) => handleVerify(e)}
          handleClose={(e) => handleOTPClose(e)}
        />
      )}
      {showSignup && (
        <SignupForm
          show={showSignup}
          handleClose={(e) => handleSignupClose(e)}
        />
      )}
      <div className="relative bg-white flex max-w-[24rem] flex-col overflow-hidden rounded-xl  bg-clip-border text-gray-700 shadow-md">
        <div className="relative  m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <div className="w-56 h-56">
            <img
              src={productImageUrl}
              alt="card-img"
              width="100%"
              height="100%"
              className="h-full w-full object-cover"
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
                onClick={btnClass ? handleDelete : (e) => handleWish(e, id)}
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
          <Price
            cardNotPrice={main_rrp}
            cardPrice={my_sale_price || sale_price}
          />
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
      </div>
    </main>
  );
};

export default Card2;
