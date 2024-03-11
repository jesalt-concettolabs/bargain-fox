const Price = ({ cardPrice, cardNotPrice }) => {
  return (
    <div className="flex items-center">
      <div className="flex gap-2">
        <h5 id="price" className="text-[#292D32] text-sm sm:text-2xl font-bold">
          <sup id="dollar" className="text-[12px] sm:text-xl font-semibold">
            $
          </sup>
          {cardPrice}
        </h5>
        <span
          id="notPrice"
          className="text-[#292D32] text-[12px] sm:text-sm text-center flex justify-center items-center"
        >
          <strike>${cardNotPrice}</strike>
        </span>
      </div>
    </div>
  );
};

export default Price;
