import React from "react";
import { Dialog } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function ThankyouModal({ open }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Dialog open={open}>
        <div className="h-[40vh] w-[50vw] flex justify-center items-center mx-auto">
          <div className="text-center">
            <p className="text-2xl text-[#292D32]">
              Thank You for your Purchase
            </p>
            <button
              onClick={handleClick}
              className="bg-[#0063FF] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-5"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ThankyouModal;
