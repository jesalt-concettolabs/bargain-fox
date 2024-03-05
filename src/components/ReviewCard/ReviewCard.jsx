const ReviewCard = ({ reviewDetail }) => {
  const { imgUrl, custName, ratingDesc, ratingStar, ratingDate } = reviewDetail;
  return (
    <div className="flex flex-col gap-3 border border-[#f0f0f0]">
      <div className="flex items-center gap-4">
        <div className="h-[48px] w-[48px] rounded-full">
          <img src={imgUrl} alt="cardImg" className="rounded-full" />
        </div>
        <span className="text-[#292D32] font-normal text-xl">{custName}</span>
      </div>
      <div className="text-[#292D32] text-[12px] sm:text-[16px] font-normal ">
        {ratingDesc}
      </div>
      <div className="flex items-center gap-2">
        <div>
          <img src={ratingStar} alt="cardRating" />
        </div>
        <span className="text-[#A4A4B8] text-center text-lg">{ratingDate}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
