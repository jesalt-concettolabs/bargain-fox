import { Link } from "react-router-dom";

const SubCard = ({ imageURL, title }) => {
  return (
    <div>
      <div className="h-[50px] w-[50px] mx-auto">
        <img
          src={imageURL}
          alt={title}
          className="flex items-center justify-center"
        />
      </div>
      <div className="text-center">
        <p className="text-[#292D32] text-[16px] font-normal">
          {title}{" "}
          <span className="text-[#ff7900]">
            <Link to={"/"}> Read More</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SubCard;
