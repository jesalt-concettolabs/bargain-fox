import { deleteCartProduct } from "../../api/constant";
import Counter from "../CardSubComponent/Counter";
import Price from "../CardSubComponent/Price";
import axios from "axios";
import { toast } from "react-toastify";

const CartComp = ({ list, mainData }) => {
  const {
    name,
    main_rrp,
    sale_price,
    percentage_discount,
    product_images,
    product_condition,
    minimum_sale_price,
    stock,
    vendor_info,
  } = list.product_info;

  const discountPrice = parseInt(percentage_discount.split("."));

  const handleCartDelete = async (id) => {
    try {
      const response = await axios.post(
        deleteCartProduct,
        { cart_product_id: [id] },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success(response.message);
        mainData(response.data.result);
      }
    } catch (error) {
      console.log("Delete Cart Product API error : ", error);
    }
  };

  return (
    list &&
    list.product_info && (
      <div className="flex flex-col xl:flex-row justify-between gap-2 border-2 border-[#f2f2f2] p-2">
        <div className="w-full xl:w-[80%]">
          <div className="flex gap-2 sm:gap-4">
            <div id="shopCartId" className="flex justify-center items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-[#ff7900] cursor-pointer"
              />
            </div>

            {product_images && (
              <div className="h-20 w-[30%] sm:h-36 sm:w-28 md:h-36 md:w-36">
                <img
                  src={product_images[0].product_image_url}
                  alt="shoppingcart-image"
                  className="w-full h-full rounded-lg"
                />
              </div>
            )}
            <div className="w-2/3">
              <div>
                {name && (
                  <p
                    id="shoppingCartName"
                    className="text-[#292D32] text-sm md:text-[18px]"
                  >
                    {name}
                  </p>
                )}
                {sale_price && main_rrp && (
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-3 ">
                      <Price cardPrice={sale_price} cardNotPrice={main_rrp} />
                      <span className="text-[#2569F3]">{discountPrice} %</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="hidden sm:flex sm:gap-4">
                <Counter count={list?.quantity} />
                <button
                  onClick={() => handleCartDelete(list.id)}
                  className="text-[18px] font-semibold text-[#292D32] p-1 border border-[#f2f2f2]"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="sm:hidden flex flex-col gap-2 ">
            <Counter count={list?.quantity} />
            <div className="flex gap-3">
              <button
                onClick={() => handleCartDelete(list.id)}
                className=" font-semibold text-[#292D32] p-1 border border-[#f2f2f2]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full xl:w-[20%] xl:gap-7 xl:items-end">
          {product_condition && (
            <div className="font-semibold">
              <span className="text-[#A4A4B8]">Condition: </span>
              {product_condition.title}
            </div>
          )}
          <div className="text-[#A4A4B8]">
            sold, by
            <span className="font-semibold text-[#292D32]">
              {" "}
              {vendor_info.trading_name},{" "}
            </span>
            <span className="text-[#ff7900] ">{stock} left</span>
          </div>
        </div>
      </div>
    )
  );
};

export default CartComp;
