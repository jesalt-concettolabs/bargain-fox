import deleteIcon from "/assets/delete.png";
import americanLogo from "/assets/american.png";

const PaymentCard = () => {
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="w-[300px] h-[166px] border-2 bg-[#FEF5E4] border-[#ff7900] rounded-xl relative text-[#292D32]">
        <div className=" flex flex-col gap-3 px-3 py-2">
          <div className="flex justify-end">
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
          <div className="h-8 w-11 -mt-3">
            <img
              src={americanLogo}
              alt="americanLogo"
              className="h-full w-full"
            />
          </div>
          <div className="flex gap-1">
            <span>****</span>
            <span>****</span>
            <span>****</span>
            <span>4242</span>
          </div>
          <div className="flex justify-between text-sm">
            <div className="flex flex-col">
              <span>CARD HOLDER</span>
              <span className="font-semibold">John</span>
            </div>
            <div>
              <span className="flex flex-col">EXPERIES</span>
              <span className="font-semibold">
                <span>04</span>/<span>24</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
