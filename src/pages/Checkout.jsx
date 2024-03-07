import { useState } from "react";
import addressIcon from "/assets/addressIcon.svg";
import americanIcon from "/assets/american.png";
import masterCardIcon from "/assets/mastercard.png";
import paypalIcon from "/assets/paypal.png";
import visaIcon from "/assets/visa.png";
import AddressForm from "../components/AddressComp/AddressForm";
import EachAddress from "../components/AddressComp/EachAddress";

const paymentIcons = [paypalIcon, visaIcon, masterCardIcon, americanIcon];

const userAddress = [
  {
    id: 1,
    addName: "Stephen Parker",
    addDescp: "22 Walden Road, Greenland, UK, KW14 3XY",
    addPhone: "+44 9876543210",
  },
  {
    id: 2,
    addName: "Jhon Doe",
    addDescp: "22 Gandhi Road Ahmedabad",
    addPhone: "+91 464544534",
  },
];

const Checkout = () => {
  const [show, setShow] = useState(false);
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleCheck = (index) => {
    if (checkedIndex === index) {
      setCheckedIndex(null);
    } else {
      setCheckedIndex(index);
    }
  };

  const handleBtn = () => {
    console.log("Button clicked Address");
    setShow(false);
  };
  return (
    <main className="container block md:flex gap-10">
      {show && <AddressForm show={show} handleClose={handleBtn} />}
      <section className="w-full md:w-[75%] mb-8 md:mb-0 flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-[#292D32] font-bold text-sm sm:text-3xl">
            Select Delivery Address
          </h2>
          <div>
            <button
              onClick={() => setShow(true)}
              className="text-[#292D32] text-[12px] sm:text-[16px] font-semibold flex gap-1 items-center "
            >
              <div className="h-4 w-4  sm:h-6 sm:w-6 rounded-full">
                <img
                  src={addressIcon}
                  alt="addressicon"
                  className="w-full h-full rounded-full"
                />
              </div>
              <span>Add New</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          {userAddress.map((item, index) => (
            <div key={item.id} className="border-2 border-[#f2f2f2] shadow-sm">
              <EachAddress
                data={item}
                checked={checkedIndex === index}
                onChange={() => handleCheck(index)}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="w-full md:w-[25%] flex items-center flex-col gap-5 border-2 border-solid border-[#f2f2f8]">
        <div className="flex flex-col gap-8  w-full">
          <button className="w-full p-2 text-center font-semibold bg-[#ff7900] rounded-3xl text-white">
            Continue to Payment
          </button>
          <div className=" flex flex-col gap-2">
            <h5 className="text-[16px] font-semibold">We Accept:</h5>
            <div className="flex gap-2">
              {paymentIcons.map((icon, index) => (
                <div key={index} className="w-14 h-11">
                  <img src={icon} alt={index} width="100%" height={"100%"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
