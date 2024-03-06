import "./footer.scss";
import fbIcon from "/assets/fb-icon.svg";
import twitterIcon from "/assets/Vector.svg";
import instaIcon from "/assets/instagram.svg";
import pinIcon from "/assets/pinterest.svg";
import FooterMenu from "./FooterMenu";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    list1: ["Delivery", "Returns", "Help Centre"],
    title: "Help",
  },
  {
    id: 2,
    list1: ["About Us", "Our Blogs", "Contact Us"],
    title: "About Us",
  },
  {
    id: 3,
    list1: [
      "Your Orders",
      "Checkout",
      "Download the App",
      "FastFox Subscription",
    ],
    title: "Your Account",
  },
];

const footerIcons = [fbIcon, twitterIcon, instaIcon, pinIcon];

const Footer = () => {
  return (
    <main className="mx-auto bg-[#222222]">
      <section className="container w-[80%] mt-6">
        <div className="pt-[3rem]">
          <div id="list-mainDiv" className="flex justify-between pb-4">
            {menuItems.map((item) => (
              <FooterMenu title={item.title} list={item.list1} key={item.id} />
            ))}
          </div>
          <div className="w-full h-[1px] bg-[#b1afae]"></div>
          <div
            id="footer-lastDiv"
            className="flex justify-between items-center py-5"
          >
            <div id="footer-icon" className="flex gap-2">
              {footerIcons.map((icon, index) => (
                <div key={index}>
                  <Link to={"/"}>
                    <div className="h-[35px] w-[35px] rounded-full hover:bg-black bg-[#FF7900] flex justify-center items-center">
                      <img src={icon} alt="footer-icons" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div id="footer-rights" className="text-[#A4A4B8] text-[16px]">
              All rights reserved © 2023 BargainFox.com
            </div>
            <div id="footer-terms" className="text-[#A4A4B8] text-[16px]">
              <span className="hover:text-[#ff7900]">
                <Link to={"/"}>Terms of Service </Link>
              </span>
              |
              <span className="hover:text-[#ff7900]">
                <Link to={"/"}> Privacy Policy</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
