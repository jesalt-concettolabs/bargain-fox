import Card1 from "../Card1/Card1";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { dealCardData } from "../../constants/dealCardData";

const DealSilder = () => {
  const silderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full">
      <Slider {...silderSetting}>
        {dealCardData.map((item) => (
          <div key={item.id}>
            <Link to={item.dealCardLink}>
              <Card1 data={item} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DealSilder;
