import { useState, useEffect, useContext } from "react";
import { Drawer } from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";
import closeIcon from "/assets/close.png";
import { Link } from "react-router-dom";
import { UserContext, UserIntialValue } from "../../context/UserContext";
import axios from "axios";
import { logoutUser } from "../../api/constant";
import LoginForm from "../../pages/LoginForm";
import OTPVerification from "../../pages/OTPVerification";
import SignupForm from "../../pages/SignupForm";

const MobileSideMenu = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const { userData, setUserData } = useContext(UserContext);

  const userName = userData.name;
  const token = localStorage.getItem("token");

  const openDrawer = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

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
      }
    } catch (error) {
      console.log("Current user api: ", error);
    }
  };

  return (
    <>
      <RxHamburgerMenu onClick={openDrawer} className="w-7 h-7" />
      <Drawer open={open} onClose={closeDrawer} className="p-10 w-[90%]">
        {show && (
          <LoginForm
            show={show}
            handleClose={handleBtn}
            handleOtp={handleOtp}
          />
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

        <img
          src={closeIcon}
          alt="closeicon"
          className="h-4 w-4 absolute top-2 right-2"
          onClick={closeDrawer}
        />
        <div>
          <div className=" w-full h-full overflow-y-auto">
            {token && (
              <div className="text-[#292D32] p-2 capitalize font-semibold">
                <h2>Welcome, {userName}</h2>
              </div>
            )}
            {!token ? (
              <button
                onClick={() => setShow(true)}
                className="bg-[#FF7900] w-full py-2 px-2 hover:bg-black text-white text-sm font-bold rounded-[56px]"
              >
                Login/Register
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-[#FF7900] w-full py-2 px-2 hover:bg-black text-white text-sm font-bold rounded-[56px]"
              >
                Logout
              </button>
            )}
            <div>
              <ul className="flex flex-col gap-4 text-[16px] mt-2  text-[#292D32] p-3">
                <li>
                  <Link to={"/product-list"}>Your Profile</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Orders</Link>
                </li>
                <li>
                  <Link to={"/"}>Address</Link>
                </li>
                <li>
                  <Link to={"/"}>Notifications</Link>
                </li>
                <li>
                  <Link to={"/"}>Wishlist</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileSideMenu;
