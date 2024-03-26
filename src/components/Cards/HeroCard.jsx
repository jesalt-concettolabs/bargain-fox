import { useState } from "react";
import HoverDiv from "../HoverDiv/HoverDiv";

const HeroCard = ({ data }) => {
  const { thumbnail_image_url, seo_title, title } = data;
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
      <section className="flex flex-col gap-2 justify-center items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full">
          <img
            src={thumbnail_image_url}
            alt={seo_title}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <span className="font-normal text-center min-h-14">{title}</span>
        {isHovered && (
          <div className="absolute top-36 z-[9999] mt-2 h-3 w-3 rounded-full bg-[#ff7900]" />
        )}
      </section>
      <div className="hidden md:block">{isHovered && <HoverDiv />}</div>
    </main>
  );
};

export default HeroCard;
