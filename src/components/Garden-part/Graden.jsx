import { Link } from "react-router-dom";
import Card2 from "../MainCard/Card2";
import rightArrow from "/assets/Group 24.svg";
import Slider from "react-slick";
import "./garden.scss";
import { gardenCardData } from "../../constants/gardenCardData";

const Graden = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <div className="w-full flex justify-between">
          <div id="deal-heading">
            <span className="text-[#292D32] text-left font-bold text-2xl capitalize">
              Garden & DIY
            </span>
          </div>
          <Link to={"/"}>
            <div
              id="view-deal-head"
              className="flex gap-2 justify-center items-center"
            >
              <span className="text-[#292D32] font-semibold text-lg">
                View All
              </span>

              <img src={rightArrow} alt="right-arrow" />
            </div>
          </Link>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {gardenCardData &&
              gardenCardData.map((item) => {
                return (
                  <div key={item.id}>
                    <Link to={item.cardUrl}>
                      <Card2 data={item} />
                    </Link>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Graden;
