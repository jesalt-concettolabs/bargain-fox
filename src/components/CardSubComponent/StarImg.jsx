import starImg from "/assets/4stars.png";

const StarImg = () => {
  return (
    <div className="flex items-center h-8 w-20 sm:h-10 sm:w-28">
      <img src={starImg} alt="starImg" width="100%" height="100%" />
    </div>
  );
};

export default StarImg;
