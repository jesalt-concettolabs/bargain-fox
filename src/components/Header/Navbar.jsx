import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.scss";
import logo from "/assets/main-logo-white-.com_350x.png";
import searchIcon from "/assets/search-normal.svg";
import userlogo from "/assets/user.svg";
import heartLogo from "/assets/whishlist.svg";
import shoppingCart from "/assets/shopping-cart.svg";

const Navbar = () => {
  return (
    <main>
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
            <Link to={"/"}>
              <div className="relative">
                <img src={heartLogo} alt="heart-logo" />
                <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#FF7900] rounded-full flex justify-center items-center">
                  0
                </span>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="relative">
                <img src={shoppingCart} alt="shoppingcart-logo" />
                <span className="absolute top-[-6px] right-[-6px] h-[20px] w-[20px] text-xs text-white bg-[#FF7900] rounded-full flex justify-center items-center">
                  0
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-2 ">
              <img src={userlogo} alt="user-logo" />
              <div
                id="user-name"
                className="text-sm flex flex-col text-[#292D32]"
              >
                <span className="text-left">Hello there,</span>
                <span className="font-bold">SIGN IN/REGISTER</span>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Header */}
        <div id="mobile-header" className="hidden">
          <div className="flex justify-between">
            <div className="flex gap-2 justify-center items-center">
              <Link to={"/"}>
                <RxHamburgerMenu className="h-7 w-7" />
              </Link>
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
              <div className="flex items-center">
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
