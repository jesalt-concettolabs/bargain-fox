import "../Garden-part/garden.scss";
import { Link } from "react-router-dom";
import Card2 from "../MainCard/Card2";
import rightArrow from "/assets/Group 24.svg";
import electonicImg4 from "/assets/Group 905524.png";
import electonicImg2 from "/assets/Group 905522.png";
import electonicImg3 from "/assets/Group 905523.png";
import electonicImg1 from "/assets/Group 905521.png";
import Slider from "react-slick";

const Electronics = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
              Electronics
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
            <Link to={"/"}>
              <Card2
                imageURL={electonicImg1}
                cardDes="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 256GB, Wi-Fi, 12MP"
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </Link>
            <Link to={"/"}>
              <Card2
                imageURL={electonicImg2}
                cardDes="Eilik - an Electronic Robot Pets Toys with Intelligent and Interactive | Abundant Emotions, Idle..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </Link>
            <Link to={"/"}>
              <Card2
                imageURL={electonicImg3}
                cardDes="LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic"
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </Link>
            <Link to={"/"}>
              <Card2
                imageURL={electonicImg4}
                cardDes="SAMSUNG Galaxy Watch 5 40mm Bluetooth Smartwatch w/ Body, Health, Fitness and Sleep Tracker.."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </Link>
            <Link to={"/"}>
              <Card2
                imageURL={electonicImg3}
                cardDes="LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic"
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </Link>
            <Link to={"/"}>
              <Card2
                imageURL={electonicImg1}
                cardDes="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 256GB, Wi-Fi, 12MP"
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </Link>
            <Link to={"/"}>
              <Card2
                imageURL={electonicImg2}
                cardDes="Eilik - an Electronic Robot Pets Toys with Intelligent and Interactive | Abundant Emotions, Idle..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </Link>
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Electronics;
