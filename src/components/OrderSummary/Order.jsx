import { Link } from "react-router-dom";

const Order = ({ data, productCount, payment }) => {
  const {
    cart_total,
    cart_sub_total,
    grand_total,
    product_sub_total,
    product_discount_total,
    sale_tax,
    sale_tax_amount,
    delivery_charge,
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
        {payment == "true" && (
          <div className="flex justify-between gap-8">
            <p>Delivery:</p>
            <p>
              {delivery_charge > 0 ? (
                <span className="text-[#2AC844]">$delivery_charge</span>
              ) : (
                <span className="text-[#2AC844]">Free</span>
              )}
            </p>
          </div>
        )}
        {payment == "true" && (
          <div className="flex justify-between gap-8">
            <p>Sales Tax:</p>
            <p>${sale_tax || sale_tax_amount}</p>
          </div>
        )}
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex justify-between font-semibold gap-8">
          <p>Total ({productCount.counterValue}) Items:</p>
          <p>${cart_sub_total || product_sub_total}</p>
        </div>
        {payment == "true" && (
          <div className="flex justify-between font-semibold gap-8 text-[#0063FF] mt-2">
            <p>Grand Total:</p>
            <p>${grand_total}</p>
          </div>
        )}
        {payment == "true" ? (
          <div>
            <Link to={"/checkout/payment"}>
              <button className="w-full flex items-center justify-center rounded-3xl py-2 bg-[#0063FF] text-white">
                Pay Now
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to={"/checkout/address"}>
              <button className="w-full flex items-center justify-center rounded-3xl py-2 bg-[#0063FF] text-white">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default Order;
