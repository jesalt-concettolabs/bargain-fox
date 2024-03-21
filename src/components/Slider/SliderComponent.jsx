import { useMemo } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Card1 from "../Card1/Card1";
import Card2 from "../MainCard/Card2";
import TrendingCard from "../Cards/TrendingCard";

const SliderComponent = ({
  data,
  xlSlide,
  lgSlide,
  mdSlide,
  smSlide,
  mainCardStatus,
  trendingCardStatus,
  dealCardStatus,
}) => {
  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: xlSlide,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: lgSlide,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: mdSlide,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: smSlide,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    [xlSlide, lgSlide, mdSlide, smSlide]
  );

  return (
    <div className="slider-container w-full">
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <Link to={"/"} key={index}>
            {mainCardStatus && <Card2 data={item} />}
            {trendingCardStatus && <TrendingCard data={item} />}
            {dealCardStatus && <Card1 data={item} />}
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
