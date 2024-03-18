import { useState, useEffect } from "react";
import { Drawer } from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";
import closeIcon from "/assets/close.png";
import { Link } from "react-router-dom";
import Signup from "../../pages/LoginForm";

const MobileSideMenu = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const openDrawer = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const handleBtn = () => {
    console.log("Button clicked Navbar");
    setShow(false);
  };

  return (
    <>
      <RxHamburgerMenu onClick={openDrawer} className="w-7 h-7" />
      <Drawer open={open} onClose={closeDrawer} className="p-10 w-[80%]">
        {show && <Signup show={show} handleClose={handleBtn} />}

        <img
          src={closeIcon}
          alt="closeicon"
          className="h-4 w-4 absolute top-2 right-2"
          onClick={closeDrawer}
        />
        <div>
          <div className=" w-full h-full overflow-y-auto">
            <button
              onClick={() => setShow(true)}
              className="bg-[#FF7900] text-white text-sm px-10 py-2 font-bold rounded-[56px]"
            >
              Login/Register
            </button>
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
