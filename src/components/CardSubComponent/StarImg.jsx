import starImg from "/assets/4stars.png";

const StarImg = () => {
  return (
    <div className="flex items-center  w-20 sm:w-28 p-2">
      <img src={starImg} alt="starImg" width="100%" height="100%" />
    </div>
  );
};

export default StarImg;
