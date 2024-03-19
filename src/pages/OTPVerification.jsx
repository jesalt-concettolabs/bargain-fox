import { Dialog } from "@material-tailwind/react";
import React, { useState, useRef, useEffect } from "react";
import closeIcon from "/assets/close.png";
import { useSelector } from "react-redux";
import { verifyOTP } from "../api/constant";
import axios from "axios";

let currentOTPIndex = 0;

const OTPVerification = ({ show, handleVerify, handleClose }) => {
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const handleSubmit = async () => {
    const enteredOTP = otp.join("");
    let userInfo;

    if (enteredOTP == "000000") {
      setError(false);
      try {
        const response = await axios.post(
          verifyOTP,
          { otp: enteredOTP, email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        userInfo = await response.data;
        console.log("Verfied Data: ", userInfo);
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
      setTimeout(() => {
        handleClose();
      }, 500);
    }
  };

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const inputRef = useRef(null);

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

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const userEmail = useSelector((state) => state.loginDetail);
  const email = userEmail.userLoginData;

  return (
    <>
      <Dialog open={show} handler={handleClose} size={"xs"}>
        <div className="relative flex  flex-col justify-center overflow-hidden">
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={handleClose}
          >
            <img src={closeIcon} alt="closeicon" />
          </div>
          <div className="relative px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
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
                  <div className={"flex justify-between gap-6 items-center"}>
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
                    <p className="text-[#292D32]">Expires in 00:30</p>
                    <button className="text-[#ff7900]">Resend Code</button>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={disableBtn}
                    className={`${
                      disableBtn ? "opacity-50" : ""
                    } rounded-[25px] w-full mt-5 bg-[#ff7900] text-white font-semibold py-1`}
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
