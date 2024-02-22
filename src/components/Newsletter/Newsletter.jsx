import React from "react";
import imageNews from "/assets/Group 905271.png";

const Newsletter = () => {
  return (
    <main>
      <section className="container w-[78%] flex flex-col gap-4 mt-6 rounded-lg bg-[#FF7900]">
        <div className="p-[1vh] flex justify-between items-center">
          <div className="text-white w-[50%]">
            <h3 className="font-bold text-2xl">Subscribe to Our Newsletters</h3>
            <p className="font-semibold text-sm">
              Receive exclusive offers, unique gift ideas, and personalised tips
              for shopping and selling on BargainFox.
            </p>
          </div>
          <div>
            <img src={imageNews} alt="newsImg" />
          </div>
          <div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-2 rounded-l-3xl"
              />
              <button className="bg-[#292D32] rounded-r-3xl text-white text-sm">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newsletter;
