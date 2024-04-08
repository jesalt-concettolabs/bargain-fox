const Counter = ({ handlePlus, handleMinus, count, stock }) => {
  return (
    <div className="py-3 flex gap-4">
      <span className="flex items-center font-semibold text-[18px] text-[#A4A4B8] ">
        Quantity:
      </span>

      <div className="relative flex items-center max-w-[8rem] border border-gray-300 rounded-sm">
        <button
          onClick={handleMinus}
          disabled={count <= 1}
          className={`text-2xl outline-none flex items-center justify-center border-r-gray-300 hover:bg-gray-200 border rounded-s-lg p-3 h-8`}
        >
          -
        </button>
        <div className="bg-gray-50 border-x-0 p-3 h-8  text-gray-900 text-lg flex items-center">
          {count}
        </div>
        <button
          onClick={handlePlus}
          disabled={count >= stock}
          className="text-2xl flex outline-none items-center justify-center border-l-gray-300 hover:bg-gray-200 border rounded-e-lg p-3 h-8 "
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
