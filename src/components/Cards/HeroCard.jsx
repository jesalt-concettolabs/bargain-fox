import { useState } from "react";
import HoverDiv from "../HoverDiv/HoverDiv";
import { Link } from "react-router-dom";

const HeroCard = ({ data }) => {
  const { thumbnail_image_url, seo_title, title, slug } = data;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <main
      className="relative flex flex-col justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`product-list/${slug}`}>
        <section className="flex flex-col gap-2 justify-center items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full">
            <img
              src={thumbnail_image_url}
              alt={seo_title}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <span className="font-normal text-center min-h-14">{title}</span>
          <div className="hidden md:block">
            {isHovered && (
              <div className="absolute top-36 z-[9999] mt-2 h-2.5 w-2.5 rounded-full bg-[#ff7900]" />
            )}
          </div>
        </section>
      </Link>

      <div className="hidden md:block">
        {isHovered && data.subcategory != "" && (
          <HoverDiv
            // baseRoute={`product-list/${slug}`}
            data={data.subcategory}
          />
        )}
      </div>
    </main>
  );
};

export default HeroCard;
