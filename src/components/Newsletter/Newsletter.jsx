import "./newsletter.scss";

const Newsletter = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col mt-6 rounded-lg ">
        <div
          id="subscribe-div"
          className="bg-[#FF7900] relative rounded-3xl text-white p-2 sm:p-4 lg:p-8 flex justify-between"
        >
          <div id="left-div" className="w-[45%] flex flex-col justify-center">
            <h3 className="font-bold text-2xl">Subscribe to Our Newsletters</h3>
            <p className="text-sm font-normal">
              Receive exclusive offers, unique gift ideas, and personalised tips
              for shopping and selling on BargainFox.
            </p>
          </div>
          <div
            id="right-div"
            className="w-[45%] flex justify-center items-center"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="text-[#707070] text-sm rounded-l-3xl h-[45px] w-[70%] outline-none p-4"
            />
            <button className="bg-[#292D32] text-sm rounded-r-3xl h-[45px] w-[30%]">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newsletter;
