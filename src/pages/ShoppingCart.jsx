import { useEffect, useState } from "react";
import Order from "../components/OrderSummary/Order";
import CartComp from "../components/ShoppingCartDetails/CartComp";
import axios from "axios";
import { shoppingCartAPI } from "../api/constant";
import Loader from "../components/Loader/Loader";

const ShoppingCart = () => {
  const [cartDetails, setCartDetails] = useState();
  const [emptyCart, setEmptyCart] = useState(false);
  const [loading, setLoading] = useState(false);

  const cartAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        shoppingCartAPI,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("cart response: ", response.data.result);
      if (response.data.result.user_cart.length == 0) {
        setEmptyCart(true);
      } else {
        setEmptyCart(false);
      }
      if (response.status === 200) {
        setCartDetails(response.data.result);
        setLoading(false);
      }
    } catch (error) {
      console.log("Cart API error: ", error);
    }
  };

  useEffect(() => {
    cartAPI();
  }, []);

  // if (emptyCart) {
  //   return <p>Cart is empty</p>;
  // }

  if (loading) {
    return <Loader />;
  }

  return (
    cartDetails &&
    (cartDetails.user_cart.length > 0 ? (
      <main className="container block md:flex gap-5">
        <section className="w-full md:w-[75%] mb-8 md:mb-0 flex flex-col gap-5">
          <div>
            <h2 className="text-[#292D32] font-bold text-3xl ">
              Shopping Cart
            </h2>
          </div>
          {cartDetails.user_cart &&
            cartDetails.user_cart.map((item) => (
              <CartComp key={item.id} list={item} mainData={cartDetails} />
            ))}
        </section>
        <section className="w-full md:w-[25%] flex items-center flex-col gap-5 border-2 border-solid border-[#f2f2f8]">
          <h6 className="text-[#292D32] font-semibold text-xl ">
            Order Summary
          </h6>
          {cartDetails && <Order data={cartDetails} />}
        </section>
      </main>
    ) : (
      <p>Cart is empty</p>
    ))
  );
};

export default ShoppingCart;
