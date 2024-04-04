import starImg1 from "/assets/1star.png";
import starImg2 from "/assets/2stars.png";
import starImg3 from "/assets/3stars.png";
import starImg4 from "/assets/4stars.png";

const StarImg = ({ rating }) => {
  return (
    <div className="flex items-center  w-20 sm:w-28 p-2">
      {rating == 0 && (
        <img src={starImg1} alt="starImg" width="100%" height="100%" />
      )}
      {rating == 1 && (
        <img src={starImg1} alt="starImg" width="100%" height="100%" />
      )}
      {rating == 2 && (
        <img src={starImg2} alt="starImg" width="100%" height="100%" />
      )}
      {rating == 3 && (
        <img src={starImg3} alt="starImg" width="100%" height="100%" />
      )}
      {rating == 4 && (
        <img src={starImg4} alt="starImg" width="100%" height="100%" />
      )}
      {rating == 5 && (
        <img src={starImg4} alt="starImg" width="100%" height="100%" />
      )}
    </div>
  );
};

export default StarImg;
