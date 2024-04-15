import "./footer.scss";
import FooterMenu from "./FooterMenu";
import { Link } from "react-router-dom";
import { footerIcons, menuItems } from "../../constants/dealCardData";

const Footer = () => {
  return (
    <main className="mx-auto bg-[#222222]">
      <section className="container w-[80%] mt-6">
        <div className="pt-[3rem]">
          <div
            id="list-mainDiv"
            className="flex  flex-row w-full justify-between gap-3 sm:gap-0 pb-4"
          >
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
                    <div className="h-[35px] w-[35px] rounded-full hover:bg-black bg-[#0063FF] flex justify-center items-center">
                      <img src={icon} alt="footer-icons" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div
              id="footer-rights"
              className="text-[#A4A4B8] text-center text-[16px]"
            >
              All rights reserved © 2023 BargainFox.com
            </div>
            <div id="footer-terms" className="text-[#A4A4B8] text-[16px]">
              <span className="hover:text-[#0063FF]">
                <Link to={"/"}>Terms of Service </Link>
              </span>
              |
              <span className="hover:text-[#0063FF]">
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
