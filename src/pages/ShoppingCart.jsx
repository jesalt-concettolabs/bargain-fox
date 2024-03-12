import Order from "../components/OrderSummary/Order";
import CartComp from "../components/ShoppingCartDetails/CartComp";
import { cartDetails } from "../constants/dealCardData";

const ShoppingCart = () => {
  return (
    <main className="container block md:flex gap-10">
      <section className="w-full md:w-[75%] mb-8 md:mb-0 flex flex-col gap-5">
        <div>
          <h2 className="text-[#292D32] font-bold text-3xl ">Shopping Cart</h2>
        </div>
        {cartDetails.map((item) => (
          <CartComp key={item.id} list={item} />
        ))}
      </section>
      <section className="w-full md:w-[25%] flex items-center flex-col gap-5 border-2 border-solid border-[#f2f2f8]">
        <h6 className="text-[#292D32] font-semibold text-xl ">Order Summary</h6>
        <Order />
      </section>
    </main>
  );
};

export default ShoppingCart;
