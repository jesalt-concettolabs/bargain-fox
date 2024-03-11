const TrendingCard = ({ data }) => {
  const { cardImg, cardName, cardOffer } = data;
  return (
    <div className="flex flex-col gap-2 justify-center items-center ">
      <div className="w-[122px] h-[122px] ">
        <img
          src={cardImg}
          alt="pets"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="rounded-2xl text-sm bg-[#ff7900] px-2 py-1 text-white ">
        {cardOffer}
      </span>
      <span className="text-[#292D32] text-center font-semibold">
        {cardName}
      </span>
    </div>
  );
};

export default TrendingCard;
