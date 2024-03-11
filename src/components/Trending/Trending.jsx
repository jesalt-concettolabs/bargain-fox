import { Link } from "react-router-dom";
import "./trending.scss";
import CardHeader from "../CardHeader/CardHeader";
import TrendingCard from "../Cards/TrendingCard";
import { trendingCardData } from "../../constants/trendingCardData";
import Slider from "react-slick";
import TrendingSubCard from "./TrendingSubCard";

const Trending = () => {
  const silderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
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
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader cardTitle="Trending on BargainFox" />
        <div className="slider-container">
          <Slider {...silderSetting}>
            {trendingCardData.map((item) => (
              <Link key={item.id} to={item.cardLink}>
                <TrendingCard data={item} />
              </Link>
            ))}
          </Slider>
        </div>
        <div className="w-[80%] mx-auto mt-10">
          <TrendingSubCard />
        </div>
      </section>
    </main>
  );
};

export default Trending;
