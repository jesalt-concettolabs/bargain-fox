import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "/assets/main-logo-white-.com_350x.png";
import searchIcon from "/assets/search-normal.svg";
import userlogo from "/assets/user.svg";
import heartLogo from "/assets/whishlist.svg";
import shoppingCart from "/assets/shopping-cart.svg";
import LoginForm from "../../pages/LoginForm";
import { useContext, useState } from "react";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";
import OTPVerification from "../../pages/OTPVerification";
import SignupForm from "../../pages/SignupForm";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { userData } = useContext(UserContext);

  const userName = userData.name;

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
          <div
            id="search-bar"
            className="flex w-[500px] items-center border-2 border-solid border-[#F5F5FC] rounded-[10px]"
          >
            <input
              type="text"
              className="h-[35px] p-1 outline-none text-[#707070] w-[95%]"
              id="search-input"
              placeholder="Search Products"
            />
            <button className="bg-[#FF7900] p-2 rounded-r-lg w-[35px] h-[35px] flex justify-center items-center">
              <img src={searchIcon} alt="search-icon" />
            </button>
          </div>
          <div className="flex items-center gap-[30px]">
            <Link to={"/wishlist"}>
              <div className="relative">
                <img src={heartLogo} alt="heart-logo" />
                <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#FF7900] rounded-full flex justify-center items-center">
                  0
                </span>
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className="relative">
                <img src={shoppingCart} alt="shoppingcart-logo" />
                <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#FF7900] rounded-full flex justify-center items-center">
                  0
                </span>
              </div>
            </Link>
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
                  {userName !== "" ? (
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
                <button
                  onClick={() => setShow(true)}
                  className="bg-[#FF7900] w-full py-2 px-2 hover:bg-black text-white text-sm font-bold rounded-[56px]"
                >
                  Login/Register
                </button>
                <div>
                  <ul className="flex flex-col gap-2 text-[16px] mt-5 text-left text-[#292D32]">
                    <li className="hover:bg-black hover:text-white pl-2 py-1">
                      <Link to={"/"}>Your Profile</Link>
                    </li>
                    <li className="hover:bg-black hover:text-white pl-2 py-1">
                      <Link to={"/"}>Your Orders</Link>
                    </li>
                    <li className="hover:bg-black hover:text-white pl-2 py-1">
                      <Link to={"/"}>Address</Link>
                    </li>
                    <li className="hover:bg-black hover:text-white pl-2 py-1">
                      <Link to={"/"}>Notifications</Link>
                    </li>
                    <li className="hover:bg-black hover:text-white pl-2 py-1">
                      <Link to={"/"}>Wishlist</Link>
                    </li>
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
                  <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#FF7900] rounded-full flex justify-center items-center">
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
                  <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#FF7900] rounded-full flex justify-center items-center">
                    0
                  </span>
                </div>
              </Link>
              <div className="flex items-center" onClick={() => setShow(true)}>
                <img src={userlogo} alt="user-logo" id="user-logo" />
              </div>
            </div>
          </div>
          <div
            id="search-bar"
            className="flex w-[500px] mt-2 items-center border-2 border-solid border-[#F5F5FC] rounded-[10px]"
          >
            <input
              type="text"
              className="h-[35px] p-1 outline-none text-[#707070] w-[95%]"
              id="search-input"
              placeholder="Search Products"
            />
            <button className="bg-[#FF7900] p-2 rounded-r-lg w-[35px] h-[35px] flex justify-center items-center">
              <img src={searchIcon} alt="search-icon" />
            </button>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Navbar;
