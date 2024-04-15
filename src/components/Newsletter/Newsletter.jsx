import { useState } from "react";
import "./newsletter.scss";
import axios from "axios";
import { newsletter } from "../../api/constant";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [letterEmail, setLetterEmail] = useState("");
  const [disable, setDisable] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClick = async () => {
    if (validateEmail(letterEmail)) {
      try {
        setDisable(true);
        const response = await axios.post(newsletter, { email: letterEmail });
        if (response.status === 200) {
          toast.success(response.data.message);
          setDisable(true);
          setLetterEmail("");
        }
      } catch (error) {
        if (error.response.data.status === 422) {
          toast.error(error.response.data.message);
          setDisable(false);
        }
      }
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleInputChange = (e) => {
    setLetterEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <main>
      <section className="container w-[80%] flex flex-col mt-6 rounded-lg ">
        <div
          id="subscribe-div"
          className="bg-[#0063FF] relative rounded-3xl text-white p-2 sm:p-4 lg:p-8 flex justify-between"
        >
          <div id="left-div" className="w-[45%] flex flex-col justify-center">
            <h3 className="font-bold text-2xl">Subscribe to Our Newsletters</h3>
            <p className="text-sm font-normal">
              Receive exclusive offers, unique gift ideas, and personalised tips
              for shopping and selling on BargainFox.
            </p>
          </div>
          <div id="right-div" className="w-[45%] ">
            <div>
              <input
                type="text"
                disabled={disable}
                value={letterEmail}
                placeholder="Enter your email"
                onChange={handleInputChange}
                className={`${
                  disable ? "bg-white" : ""
                } text-[#707070] text-sm rounded-l-3xl h-[45px] w-[70%] outline-none p-4`}
              />

              <button
                onClick={handleClick}
                disabled={disable || emailError !== ""}
                className={`bg-[#292D32] text-sm outline-none rounded-r-3xl h-[45px] w-[30%] ${
                  disable || emailError !== ""
                    ? "opacity-80 cursor-not-allowed"
                    : ""
                } `}
              >
                Subscribe Now
              </button>
            </div>

            {emailError && (
              <p className="text-[red] text-[10px] sm:text-sm pt-2 pl-2">
                {emailError}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newsletter;
