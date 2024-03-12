const Card1 = ({ data }) => {
  const { dealCardImage, dealCardName, dealCardText } = data;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-t-[25px]">
        <img
          src={dealCardImage}
          alt="womanimg"
          className="h-full w-full rounded-t-[25px] object-cover"
        />
      </div>
      <div className={`flex flex-col gap-1 p-2`}>
        <p className={`text-sm font-normal`}>{dealCardText}</p>
        <span className={`text-[#292D32] text-sm font-semibold `}>
          {dealCardName}
        </span>
      </div>
    </div>
  );
};

export default Card1;
