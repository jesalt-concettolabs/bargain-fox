import React from "react";

const Payment = () => {
  return (
    <main className="container block md:flex gap-10">
      <section className="w-full md:w-[75%] mb-8 md:mb-0 flex flex-col gap-5 border-2 border-gray-700">
        <h2 className="text-[#292D32] font-bold text-3xl ">Payment</h2>
        <div className="block md:flex md:gap-10">
          <section className="w-full md:w-[75%] mb-8 md:mb-0 flex flex-col gap-5 border-2 border-gray-700">
            Delivery Address
          </section>
          <section className="w-full md:w-[25%] flex justify-center flex-col gap-5 border-2 border-solid border-gray-900">
            Delivery Method
          </section>
        </div>
        <div>
          <h3 className="text-[#292D32] font-bold">Item Details(3)</h3>
          <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap w-full">
            <div className="h-25 w-25 border-2 border-gray-800">
              hjbjhkbkjbbbfdf
            </div>
            <div className="h-25 w-25 border-2 border-gray-800">
              hjbjhkbkjbbbfdf
            </div>
            <div className="h-25 w-25 border-2 border-gray-800">
              hjbjhkbkjbbbfdf
            </div>
            <div className="h-25 w-25 border-2 border-gray-800">
              hjbjhkbkjbbbfdf
            </div>
            <div className="h-25 w-25 border-2 border-gray-800">
              hjbjhkbkjbbbfdf
            </div>
            <div className="h-25 w-25 border-2 border-gray-800">
              hjbjhkbkjbbbfdf
            </div>
            <div className="h-25 w-25 border-2 border-gray-800">
              hjbjhkbkjbbbfdf
            </div>
            <div className="h-25 w-25 border-2 border-gray-800">
              hjbjhkbkjbbbfdf
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[#292D32] font-bold text-3xl ">Payment Method</h2>
        </div>
        <div>
          <h2 className="text-[#292D32] font-bold text-3xl ">
            Billing Address
          </h2>
        </div>
      </section>
      <section className="w-full md:w-[25%] flex flex-col gap-5 border-2 border-solid border-gray-900">
        <h6 className="text-[#292D32] font-semibold text-xl capitalize">
          Order Summary
        </h6>
      </section>
    </main>
  );
};

export default Payment;
