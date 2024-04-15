import { useEffect, useState } from "react";
import addressIcon from "/assets/addressIcon.svg";
import AddressForm from "../components/AddressComp/AddressForm";
import EachAddress from "../components/AddressComp/EachAddress";
import { paymentIcons } from "../constants/dealCardData";
import axios from "axios";
import { getUserAddress } from "../api/constant";
import noAddressImg from "/assets/no-address.svg";
import NoDataFound from "../components/NoDataFound/NoDataFound";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { toast } from "react-toastify";

const Checkout = () => {
  const [show, setShow] = useState(false);
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [updatePage, setUpdatePage] = useState(false);
  const [deliveryAddress, setDeliveyAddress] = useState();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getUserAddressApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(getUserAddress, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        setDeliveyAddress(response.data.result);
        setLoading(false);
      }
    } catch (error) {
      console.log("Get use Address API error: ", error);
    }
  };

  useEffect(() => {
    getUserAddressApi();
  }, [updatePage]);

  const handleCheck = (index) => {
    if (checkedIndex === index) {
      setCheckedIndex(null);
    } else {
      setCheckedIndex(index);
    }
  };

  const handleBtn = () => {
    setShow(!show);
  };

  const handleNewAddress = () => {
    setCheckedIndex(null);
    setShow(!show);
  };

  const handlePayment = () => {
    if (checkedIndex != null) {
      navigate("/checkout/payment");
    } else {
      toast.error("Please Select the Address");
    }
  };

  if (token && loading) {
    return <Loader />;
  }

  if (!token && loading) {
    return navigate("/");
  }

  return (
    <main className="container block md:flex gap-10">
      {show && (
        <AddressForm
          show={show}
          editAddress={deliveryAddress[checkedIndex]}
          handleClose={handleBtn}
          checked={checkedIndex}
          update={setUpdatePage}
        />
      )}
      <section className="w-full md:w-[75%] mb-8 md:mb-0 flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-[#292D32] font-bold text-sm sm:text-3xl">
            Select Delivery Address
          </h2>
          <div>
            <button
              onClick={handleNewAddress}
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
          {deliveryAddress && deliveryAddress.length > 0 ? (
            deliveryAddress.map((item, index) => (
              <div
                key={item.id}
                className="border-2 border-[#f2f2f2] shadow-sm"
              >
                <EachAddress
                  data={item}
                  checked={checkedIndex === index}
                  onChange={() => handleCheck(index)}
                  onClick={() => handleBtn(index)}
                />
              </div>
            ))
          ) : (
            <NoDataFound title={"No Address Yet"} emptyImg={noAddressImg} />
          )}
        </div>
      </section>
      <section className="w-full md:w-[25%] flex items-center flex-col gap-5 border-2 border-solid border-[#f2f2f8]">
        <div className="flex flex-col gap-8  w-full">
          <button
            onClick={handlePayment}
            className="w-full p-2 text-center font-semibold bg-[#0063FF] rounded-3xl text-white"
          >
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
