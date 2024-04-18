import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import logo from "/assets/eCartlogo.svg";
import userlogo from "/assets/user.svg";
import heartLogo from "/assets/whishlist.svg";
import shoppingCart from "/assets/shopping-cart.svg";
import LoginForm from "../../pages/LoginForm";
import { useContext, useEffect, useState } from "react";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";
import OTPVerification from "../../pages/OTPVerification";
import SignupForm from "../../pages/SignupForm";
import { UserContext, UserIntialValue } from "../../context/UserContext";
import {
  currentCartDetail,
  getWishListCountDetail,
  logoutUser,
} from "../../api/constant";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { addCounterValue } from "../../reducers/counterDetailSlice";
import { addCartCounterValue } from "../../reducers/cartCounterSlice";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { userData, setUserData } = useContext(UserContext);

  const productCount = useSelector((state) => state.counterValueDetail);
  const cartCount = useSelector((state) => state.cartCounterDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = userData.name;
  const token = localStorage.getItem("token");

  const getCurrentCartCount = async () => {
    try {
      const response = await axios.get(currentCartDetail, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(addCounterValue(response.data.result.cart_item_count));
    } catch (error) {
      console.log("Current Cart count api: ", error);
    }
  };

  const getWishListCount = async () => {
    try {
      const response = await axios.get(getWishListCountDetail, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(addCartCounterValue(response.data.result.wishlistcount));
    } catch (error) {
      console.log("Current Cart count api: ", error);
    }
  };

  useEffect(() => {
    if (token) {
      getCurrentCartCount();
      getWishListCount();
    }
  }, [productCount, token, cartCount]);

  const handleBtn = () => {
    setShow(false);
  };

  const handleSignupClose = () => {
    setShowSignup(false);
  };

  const handleOtp = () => {
    setShow(false);
    setShowOtp(true);
  };

  const handleVerify = () => {
    setShowOtp(false);
    setShowSignup(true);
  };

  const handleOTPClose = () => {
    setShowOtp(false);
  };

  const handleWishList = () => {
    if (token) {
      navigate("/wishlist");
    } else {
      setShow(true);
    }
  };

  const handleCart = () => {
    if (token) {
      navigate("/cart");
    } else {
      setShow(true);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get(logoutUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        localStorage.removeItem("token");
        setUserData(UserIntialValue);
        window.location.reload();
      }
    } catch (error) {
      console.log("Current user api: ", error);
    }
  };

  return (
    <main>
      {show && (
        <LoginForm show={show} handleClose={handleBtn} handleOtp={handleOtp} />
      )}
      {showOtp && (
        <OTPVerification
          show={showOtp}
          handleVerify={handleVerify}
          handleClose={handleOTPClose}
        />
      )}
      {showSignup && (
        <SignupForm show={showSignup} handleClose={handleSignupClose} />
      )}

      <header className="container">
        {/* Main Header */}
        <div id="main-header" className="flex justify-between items-center">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo-main"
              className="h-[60px] w-[140px]"
              id="nav-logo"
            />
          </Link>
          <SearchBar />
          <div className="flex items-center gap-[30px]">
            <div className="relative cursor-pointer" onClick={handleWishList}>
              <img src={heartLogo} alt="heart-logo" />
              <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#0063FF] rounded-full flex justify-center items-center">
                {cartCount.counterValue > 0 ? cartCount.counterValue : 0}
              </span>
            </div>
            <div className="relative cursor-pointer" onClick={handleCart}>
              <img src={shoppingCart} alt="shoppingcart-logo" />
              {productCount && (
                <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#0063FF] rounded-full flex justify-center items-center">
                  {productCount.counterValue > 0
                    ? productCount.counterValue
                    : 0}
                </span>
              )}
            </div>
            <div
              id="user-div"
              className="flex flex-col items-center gap-2 cursor-pointer "
            >
              <div className="flex gap-2">
                <img src={userlogo} alt="user-logo" />

                <div
                  id="user-name"
                  className="text-sm flex flex-col text-[#292D32]"
                >
                  <span className="text-left">Hello there,</span>
                  {token ? (
                    <span className="font-bold capitalize">{userName}</span>
                  ) : (
                    <span className="font-bold">SIGN IN/REGISTER</span>
                  )}
                </div>
              </div>
              <div
                id="user-hover"
                className="hidden absolute w-48 right-10 p-2 bg-[#FFFFFF] shadow-md rounded-md pt-7 mt-9 z-[9999]"
              >
                {!token ? (
                  <button
                    onClick={() => setShow(true)}
                    className="bg-[#0063FF] w-full py-2 px-2 hover:bg-black text-white text-sm font-bold rounded-[56px]"
                  >
                    Login/Register
                  </button>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="bg-[#0063FF] w-full py-2 px-2 hover:bg-black text-white text-sm font-bold rounded-[56px]"
                  >
                    Logout
                  </button>
                )}

                <div>
                  <ul className="flex flex-col text-[16px] mt-5 text-left text-[#292D32]">
                    <Link to={"/profile"}>
                      <li className="hover:bg-black hover:text-white pl-2 py-2">
                        Your Profile
                      </li>
                    </Link>
                    <Link to={"/your-orders"}>
                      <li className="hover:bg-black hover:text-white pl-2 py-2">
                        Your Orders
                      </li>
                    </Link>
                    <Link to={"/"}>
                      <li className="hover:bg-black hover:text-white pl-2 py-2">
                        Address
                      </li>
                    </Link>
                    <Link to={"/wishlist"}>
                      <li className="hover:bg-black hover:text-white pl-2 py-2">
                        Wishlist
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div id="mobile-header" className="hidden">
          <div className="flex justify-between">
            <div className="flex gap-2 justify-center items-center">
              <MobileSideMenu />
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="logo-main"
                  className="h-[60px] w-[140px]"
                  id="nav-logo"
                />
              </Link>
            </div>

            <div className="flex items-center gap-[30px]">
              <Link to={"/"}>
                <div className="relative">
                  <img src={heartLogo} alt="heart-logo" id="whishlist-logo" />
                  <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#0063FF] rounded-full flex justify-center items-center">
                    0
                  </span>
                </div>
              </Link>
              <Link to={"/"}>
                <div className="relative">
                  <img
                    src={shoppingCart}
                    alt="shoppingcart-logo"
                    id="cart-logo"
                  />
                  <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#0063FF] rounded-full flex justify-center items-center">
                    0
                  </span>
                </div>
              </Link>
              <div className="flex items-center" onClick={() => setShow(true)}>
                <img src={userlogo} alt="user-logo" id="user-logo" />
              </div>
            </div>
          </div>
          <SearchBar />
        </div>
      </header>
    </main>
  );
};

export default Navbar;
