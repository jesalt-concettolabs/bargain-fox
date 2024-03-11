import React from "react";

const Counter = () => {
  return (
    <div className="py-3 flex gap-4">
      <span className="flex items-center font-semibold text-[18px] text-[#A4A4B8] ">
        Quantity:
      </span>

      <div className="relative flex items-center max-w-[8rem] border border-gray-300 rounded-sm">
        <button className=" text-2xl flex items-center border-r-gray-300 hover:bg-gray-200 border rounded-s-lg p-3 h-8">
          -
        </button>
        <div className="bg-gray-50 border-x-0 p-3 h-8  text-gray-900 text-lg flex items-center">
          0
        </div>
        <button className=" text-2xl flex items-center border-l-gray-300 hover:bg-gray-200 border rounded-e-lg p-3 h-8 ">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
