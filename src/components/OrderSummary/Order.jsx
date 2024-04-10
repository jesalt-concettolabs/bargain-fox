import { Link } from "react-router-dom";

const Order = ({ data, mainData }) => {
  const {
    cart_total,
    cart_sub_total,
    grand_total,
    product_sub_total,
    expected_delivery,
    product_discount_total,
  } = data;
  return (
    <main className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <div className="flex justify-between gap-8">
          <p>Item(s) total:</p>
          <p>${cart_total}</p>
        </div>
        <div className="flex justify-between gap-8">
          <p>Item(s) discount:</p>
          <p className="text-[#2569F3] text-right ">
            -${product_discount_total}
          </p>
        </div>
        <div className="flex justify-between gap-8">
          <p>Subtotal:</p>
          <p className="text-right">
            ${cart_sub_total || grand_total || product_sub_total}
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-between font-semibold gap-8">
          <p>Total (3 Items):</p>
          <p>${cart_sub_total || grand_total || product_sub_total}</p>
        </div>
        <div>
          <Link to={"/checkout"}>
            <button className="w-full flex items-center justify-center rounded-3xl py-2 bg-[#ff7900] text-white">
              Proceed to Checkout
            </button>
          </Link>
        </div>
        <div>
          {/* <p className="text-[#292D32] text-[14px] sm:text-sm ">
            {expectedGelivery}
          </p> */}
        </div>
      </section>
    </main>
  );
};

export default Order;
