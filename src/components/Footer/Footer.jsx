import "./footer.scss";
import fbIcon from "/assets/fb-icon.svg";
import twitterIcon from "/assets/Vector.svg";
import instaIcon from "/assets/instagram.svg";
import pinIcon from "/assets/pinterest.svg";

const Footer = () => {
  return (
    <main className="mx-auto bg-[#222222]">
      <section className="container w-[80%] mt-6">
        <div className="pt-[3rem]">
          <div
            id="list-mainDiv"
            className="flex justify-between text-[#A4A4B8] text-sm pb-4"
          >
            <ul className="flex flex-col gap-3">
              <li id="list-head1" className="text-white text-xl">
                Help
              </li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Help Centre</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li id="list-head2" className="text-white text-xl">
                About Us
              </li>
              <li>About Us</li>
              <li>Our Blogs</li>
              <li>Contact Us</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li id="list-head3" className="text-white text-xl">
                Your Account
              </li>
              <li>Your Orders</li>
              <li>Checkout</li>
              <li>Download the App</li>
              <li>FastFox Subscription</li>
            </ul>
          </div>
          <div className="w-full h-[1px] bg-[#b1afae]"></div>
          <div
            id="footer-lastDiv"
            className="flex justify-between items-center py-5"
          >
            <div id="footer-icon" className="flex gap-2">
              <div className="h-[35px] w-[35px] rounded-full bg-[#FF7900] flex justify-center items-center">
                <img src={fbIcon} alt="fbIcon" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-[#FF7900] flex justify-center items-center">
                <img src={twitterIcon} alt="twitterIcon" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-[#FF7900] flex justify-center items-center">
                <img src={instaIcon} alt="instaIcon" />
              </div>
              <div className="h-[35px] w-[35px] rounded-full bg-[#FF7900] flex justify-center items-center">
                <img src={pinIcon} alt="pinIcon" />
              </div>
            </div>
            <div id="footer-rights" className="text-[#A4A4B8] text-[16px]">
              All rights reserved © 2023 BargainFox.com
            </div>
            <div id="footer-terms" className="text-[#A4A4B8] text-[16px]">
              Terms of Service | Privacy Policy
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
