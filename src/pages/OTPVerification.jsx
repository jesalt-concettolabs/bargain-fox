import { Dialog } from "@material-tailwind/react";
import React, { useState, useRef, useEffect, useContext } from "react";
import closeIcon from "/assets/close.png";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP, verifyOTP } from "../api/constant";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { addLoginOTP } from "../reducers/loginDetailSlice";

let currentOTPIndex = 0;

const OTPVerification = ({ show, handleVerify, handleClose }) => {
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const inputRef = useRef(null);

  const userEmail = useSelector((state) => state.loginDetail);
  const email = userEmail.userLoginData;

  const handleResend = async () => {
    setError(false);
    try {
      setResendDisabled(true);

      const response = await axios.post(sendOTP, { email: email });
      console.log("reset btn clicked: ", response.status);

      setOtp(new Array(6).fill(""));

      setSeconds(30);

      setTimeout(() => {
        setResendDisabled(false);
      }, 30000);
    } catch (error) {
      console.log("resend otp error: ", error);
    }
  };

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const formattedSeconds = seconds.toString().padStart(2, "0");

  const dispatch = useDispatch();

  const { setUserData } = useContext(UserContext);

  const handleSubmit = async () => {
    const enteredOTP = otp.join("");
    dispatch(addLoginOTP(enteredOTP));
    let userInfo;

    if (enteredOTP == "000000") {
      setError(false);
      try {
        const response = await axios.post(verifyOTP, {
          otp: enteredOTP,
          email,
        });
        userInfo = await response.data;
      } catch (error) {
        console.log("verifing error: ", error);
      }
    } else {
      setError(true);
    }

    if (userInfo.result.is_new_user == true && userInfo.status === 200) {
      setTimeout(() => {
        handleVerify();
      }, 500);
    } else if (
      userInfo.result.is_new_user == false &&
      userInfo.status === 200
    ) {
      setUserData(userInfo.result);
      localStorage.setItem("token", userInfo.result.token);
      setTimeout(() => {
        handleClose();
      }, 500);
    }
  };

  const handleOnChange = ({ target }) => {
    const { value } = target;
    const newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) {
      setActiveOTPIndex(currentOTPIndex - 1);
    } else {
      setActiveOTPIndex(currentOTPIndex + 1);
    }

    setOtp(newOTP);

    const allFieldsFilled = newOTP.every((value) => value !== "");
    setDisableBtn(!allFieldsFilled);
  };

  const handleOnKeyDown = (e, index) => {
    currentOTPIndex = index;
    if (e.key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <>
      <Dialog open={show} handler={handleClose} size={"xs"}>
        <div
          className="relative flex  flex-col justify-center overflow-hidden"
          onClick={handleClick}
        >
          <div className="relative px-6 py-6 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="float-end cursor-pointer" onClick={handleClose}>
              <img src={closeIcon} alt="closeicon" />
            </div>
            <div className="mx-auto flex w-full max-w-md flex-col space-y-4">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="text-[#292D32] text-2xl font-semibold">
                  <p>Verification Code</p>
                </div>
                <div className="flex flex-row font-medium text-[#707070]">
                  <p>
                    A verification code is sent to{" "}
                    <span className="font-semibold">{email}</span>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-2 mt-5">
                  <p className="text-sm font-medium text-[#000000B3]">
                    Verification Code
                  </p>
                  <div
                    className={
                      "flex justify-between gap-2 sm:gap-6 items-center"
                    }
                  >
                    {otp.map((_, index) => {
                      return (
                        <React.Fragment key={index}>
                          <input
                            ref={activeOTPIndex === index ? inputRef : null}
                            type="number"
                            className={
                              "w-full h-12 border-2 rounded  bg-[#f2f2f8] outline-none text-black text-center font-normal text-xl border-gray-400 transition"
                            }
                            onChange={handleOnChange}
                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                            value={otp[index]}
                          />
                        </React.Fragment>
                      );
                    })}
                  </div>
                  {error && <p className="text-red-400">OTP is invalid</p>}
                  <div className="flex justify-between items-center text-[16px] font-normal">
                    <div>
                      {formattedSeconds != 0 && (
                        <p className="text-[#292D32]">
                          Expires in 00:{formattedSeconds}
                        </p>
                      )}
                    </div>
                    {formattedSeconds == 0 && (
                      <button
                        onClick={handleResend}
                        disabled={resendDisabled}
                        className={`${
                          resendDisabled ? "opacity-50 cursor-not-allowed" : ""
                        } text-[#0063FF]`}
                      >
                        Resend Code
                      </button>
                    )}
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={disableBtn}
                    className={`${
                      disableBtn ? "opacity-50" : ""
                    } rounded-[25px] w-full mt-5 bg-[#0063FF] text-white font-semibold py-1`}
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default OTPVerification;
