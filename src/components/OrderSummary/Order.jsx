import { Link } from "react-router-dom";

const Order = () => {
  return (
    <main className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Item(s) total:</span>
          <span>$68.50</span>
        </div>
        <div className="flex justify-between">
          <span>Item(s) discount:</span>
          <span className="text-[#2569F3] text-right ">-$40</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span className="text-right">$28.50</span>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-between font-semibold">
          <span>Total (3 Items):</span>
          <span>$28.50</span>
        </div>
        <div>
          <Link to={"/checkout"}>
            <button className="w-full flex items-center justify-center rounded-3xl py-2 bg-[#ff7900] text-white">
              Proceed to Checkout
            </button>
          </Link>
        </div>
        <div>
          <p className="text-[#292D32] text-[14px] sm:text-sm ">
            Order within<span className="text-[#ff7900]"> 2h 25m </span>and
            choose
            <span className="text-[#ff7900]"> Express Shipping </span>to get it
            by Tuesday
            <span className="text-[#ff7900]"> 25/7/2023</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Order;
