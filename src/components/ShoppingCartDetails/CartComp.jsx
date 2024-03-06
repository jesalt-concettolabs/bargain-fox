import { Checkbox } from "@material-tailwind/react";
import "./cartcomp.scss";

const CartComp = ({ list }) => {
  const { prdName, prdPrice, prdNotPrice, discPercentage, cartImg } = list;

  return (
    <div className="flex flex-col xl:flex-row justify-between gap-2 border-2 border-[#f2f2f2] p-2">
      <div className="w-full xl:w-[80%]">
        <div className="flex gap-2 sm:gap-4">
          <div id="shopCartId" className="flex justify-center items-center">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-[#ff7900] cursor-pointer"
            />
          </div>

          <div className="h-20 w-[30%] sm:h-36 sm:w-28 md:h-36 md:w-36">
            <img
              src={cartImg}
              alt="shoppingcart-image"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-2/3">
            <div>
              <p
                id="shoppingCartName"
                className="text-[#292D32] text-sm md:text-[18px]"
              >
                {prdName}
              </p>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3 ">
                  <div className="flex gap-2">
                    <h5 className="text-[#292D32] text-2xl font-bold">
                      <sup className="text-sm md:text-xl font-semibold">$</sup>
                      {prdPrice}
                    </h5>
                    <span className="text-[#292D32] text-sm text-center flex justify-center items-center">
                      <strike>${prdNotPrice}</strike>
                    </span>
                  </div>
                  <span className="text-[#2569F3] ">{discPercentage}</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:gap-4">
              <div className="py-3 flex gap-4">
                <span className="flex items-center font-semibold text-[#A4A4B8] ">
                  Quantity:
                </span>

                <div className="relative flex items-center max-w-[8rem] border border-gray-300 rounded-sm">
                  <button className=" text-xl flex items-center border-r-gray-300 hover:bg-gray-200 border rounded-s-lg p-2 h-6">
                    -
                  </button>
                  <div className="bg-gray-50 border-x-0 p-2 h-6  text-gray-900  flex items-center">
                    0
                  </div>
                  <button className=" text-xl flex items-center border-l-gray-300 hover:bg-gray-200 border rounded-e-lg p-2 h-6 ">
                    +
                  </button>
                </div>
              </div>
              <button className="text-[18px] font-semibold text-[#292D32] p-1 border border-[#f2f2f2]">
                Delete
              </button>
              <button className="text-[18px] font-semibold text-[#292D32] p-1 border border-[#f2f2f2]">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-2 ">
          <div className="pt-3 flex gap-4">
            <span className="flex items-center font-semibold text-[#A4A4B8] ">
              Quantity:
            </span>

            <div className="relative flex items-center max-w-[8rem] border border-gray-300 rounded-sm">
              <button className=" text-xl flex items-center border-r-gray-300 hover:bg-gray-200 border rounded-s-lg p-2 h-6">
                -
              </button>
              <div className="bg-gray-50 border-x-0 p-2 h-6  text-gray-900  flex items-center">
                0
              </div>
              <button className=" text-xl flex items-center border-l-gray-300 hover:bg-gray-200 border rounded-e-lg p-2 h-6 ">
                +
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button className=" font-semibold text-[#292D32] p-1 border border-[#f2f2f2]">
              Delete
            </button>
            <button className=" font-semibold text-[#292D32] p-1 border border-[#f2f2f2]">
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full xl:w-[20%] xl:gap-7 xl:items-end">
        <div className="font-semibold">
          <span className="text-[#A4A4B8]">Condition: </span>Brand new
        </div>
        <div className="text-[#A4A4B8]">
          374 sold, by
          <span className="font-semibold text-[#292D32]"> Celby Store, </span>
          <span className="text-[#ff7900] ">2 left</span>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
