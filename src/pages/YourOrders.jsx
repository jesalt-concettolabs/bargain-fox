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

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  console.log("kjbkj", orderDetails);

  const yourOrdersApi = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        yourOrderList,
        { order_type: "all" },
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

  useEffect(() => {
    yourOrdersApi();
  }, []);

  if (token && loading) {
    return <Loader />;
  }

  if (!token && loading) {
    return navigate("/");
  }

  return (
    <main className="container">
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <div className="flex justify-between">
          <h4>Your Orders</h4>
          <div className="flex gap-10">
            <div>Period</div>
            <div>Type</div>
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
                  <div className="flex gap-2 sm:gap-4">
                    {item.product_info && item.product_info.product_images && (
                      <div className="h-20 w-[30%] sm:h-36 sm:w-28 md:h-36 md:w-36 rounded-lg">
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
                        <div className="flex gap-x-3">
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
                <div className="flex flex-col gap-3 w-full xl:w-[20%] xl:gap-7 xl:items-end">
                  <div className="font-semibold">
                    <span className="text-[#11C252]">Arriving on: </span>
                    {moment(item.expected_delivery_at).format("DD MMMM, YYYY")}
                  </div>
                  <div className="text-[18px] text-[#0063FF] font-semibold cursor-pointer">
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
