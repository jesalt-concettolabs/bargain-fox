const TrendingCard = ({ data }) => {
  const { cardImg, cardName, cardOffer } = data;
  return (
    <div className="flex flex-col gap-2 justify-center items-center ">
      <div className="w-[122px] h-[122px] bg-[#f5f5fc] rounded-full object-contain">
        <img src={cardImg} alt={cardName} className="w-full h-full" />
      </div>
      <span className="rounded-2xl text-sm bg-[#0063FF] mt-[-10px] px-2 text-white ">
        {cardOffer}
      </span>
      <span className="text-[#292D32] text-center font-semibold">
        {cardName}
      </span>
    </div>
  );
};

export default TrendingCard;
