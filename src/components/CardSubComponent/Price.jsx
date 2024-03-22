const Price = ({ cardPrice, cardNotPrice }) => {
  return (
    <div className="flex items-center">
      <div className="flex gap-2">
        <div className="text-[#292D32] flex justify-center items-center">
          <span className="text-[12px] sm:text-[18px] font-semibold mb-1.5">
            $
          </span>
          <h5 className="text-sm sm:text-[18px] font-semibold">{cardPrice}</h5>
        </div>

        <span className="text-[#292D32] text-[12px] sm:text-[12px] text-center flex justify-center items-center">
          <strike>${cardNotPrice}</strike>
        </span>
      </div>
    </div>
  );
};

export default Price;
