import Order from "../components/OrderSummary/Order";
import CartComp from "../components/ShoppingCartDetails/CartComp";
import prdImg1 from "/assets/flowers.png";
import prdImg2 from "/assets/prdImg5.png";
import prdImg3 from "/assets/prdImg6.png";

const cartDetails = [
  {
    id: 1,
    cartImg: prdImg1,
    prdName:
      "Tie Strap Wide Leg Jumpsuit, Casual jfvbndkjsvnc dcbndwnvcewd ceoiwncdec d bduiscbjcnsjcn  bub eucbwxnewsa  nbwosxn  Sleeveless Jumpsuit For Spring & Summer, Women's Clothing",
    prdPrice: "12",
    prdNotPrice: "38.98",
    discPercentage: "-65%",
  },
  {
    id: 2,
    cartImg: prdImg2,
    prdName:
      "Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's Clothing  ufhckjchkcn kc chncoicslj oichoisc n   ",
    prdPrice: "12",
    prdNotPrice: "38.98",
    discPercentage: "-25%",
  },
  {
    id: 3,
    cartImg: prdImg3,
    prdName:
      "Tie Strap Wide Leg Jumpsuit, Casual Sleeveless Jumpsuit For Spring & Summer, Women's Clothing",
    prdPrice: "12",
    prdNotPrice: "38.98",
    discPercentage: "-55%",
  },
];

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
