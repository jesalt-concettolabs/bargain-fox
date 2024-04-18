import React, { useEffect, useState } from "react";
import moment from "moment";
import Price from "../components/CardSubComponent/Price";
import axios from "axios";
import { yourOrderList } from "../api/constant";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const YourOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("2024");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const yourOrdersApi = async (type, period) => {
    setLoading(true);
    try {
      const response = await axios.post(
        yourOrderList,
        {
          order_type: type,
          year: period,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setOrderDetails(response.data.result.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Your orders api error: ", error);
      setLoading(false);
    }
  };

  const handlePeriod = (e) => {
    const filterPeriod = e.target.value;
    setSelectedPeriod(filterPeriod);
    yourOrdersApi(selectedType, filterPeriod);
  };

  const handleType = (e) => {
    const filterType = e.target.value;
    setSelectedType(filterType);
    yourOrdersApi(filterType, selectedPeriod);
  };

  useEffect(() => {
    yourOrdersApi(selectedType, selectedPeriod);
  }, [selectedType, selectedPeriod]);

  if (token && loading) {
    return <Loader />;
  }

  if (!token && loading) {
    return navigate("/");
  }

  return (
    <main className="container">
      <section className="mx-auto w-[100%] lg:w-[80%] flex flex-col gap-10 sm:gap-6 mt-6">
        <div className="flex flex-col gap-y-5 sm:flex-row justify-between">
          <span className="text-[#292D32] text-left text-2xl font-bold sm:text-3xl capitalize pr-4">
            Your Orders
          </span>
          <div className="flex flex-col gap-y-2 sm:flex-row gap-10">
            <div className="flex justify-center items-center border rounded-2xl p-1">
              <span className="text-[#A4A4B8] text-sm pr-2">Period:</span>
              <div className="text-[#292D32]">
                <select
                  value={selectedPeriod}
                  onChange={handlePeriod}
                  className="py-2 px-4 block w-full bg-transparent rounded-lg text-sm disabled:opacity-50 outline-none"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center border rounded-2xl p-1">
              <span className="text-[#A4A4B8] text-sm pr-2">Type:</span>
              <div className="text-[#292D32]">
                <select
                  value={selectedType}
                  onChange={handleType}
                  className="py-2 px-4 block w-full bg-transparent rounded-lg text-sm disabled:opacity-50 outline-none"
                >
                  <option value="all">All orders</option>
                  <option value="out_for_delivery">On the way</option>
                  <option value="delivered">Delivered</option>
                  <option value="order_cancel">Cancelled</option>
                  <option value="return_request">Returned</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {orderDetails &&
            orderDetails.map((item) => (
              <div
                key={item.id}
                className="flex flex-col xl:flex-row justify-between gap-2 border-2 border-[#f2f2f2] p-2"
              >
                <div className="w-full xl:w-[80%]">
                  <div className="flex gap-2 sm:gap-4 mb-5 sm:mb-0">
                    {item.product_info && item.product_info.product_images && (
                      <div className="h-28 w-[40%] sm:h-36 sm:w-28 md:h-36 md:w-36 rounded-lg">
                        <img
                          src={
                            item.product_info.product_images[0]
                              .product_image_url
                          }
                          alt="shoppingcart-image"
                          className="w-full h-full rounded-lg"
                        />
                      </div>
                    )}
                    <div className="w-2/3">
                      <div className="flex flex-col gap-y-4">
                        <p
                          id="shoppingCartName"
                          className="text-[#292D32] text-sm md:text-[18px]"
                        >
                          {item.product_info.name}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 ">
                            <Price
                              cardPrice={item.product_info.sale_price}
                              cardNotPrice={item.product_info.main_rrp}
                            />
                          </div>
                        </div>
                        <div className="flex-col sm:flex-row gap-x-3 text-sm sm:text-[16px]">
                          <div className="font-semibold">
                            <span className="text-[#A4A4B8]">Condition: </span>
                            Brand new
                          </div>
                          <div className="font-semibold">
                            <span className="text-[#A4A4B8]">Quantity: </span>
                            {item.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-sm sm:text-[16px] gap-3 w-full xl:w-[20%] xl:gap-7 xl:items-end">
                  <div className="font-semibold">
                    <span className="text-[#11C252]">Arriving on: </span>
                    {moment(item.expected_delivery_at).format("DD MMMM, YYYY")}
                  </div>
                  <div className="sm:text-[18px] text-[#0063FF] font-semibold cursor-pointer">
                    Rate This Product
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default YourOrders;
