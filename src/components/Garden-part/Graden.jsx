import { Link } from "react-router-dom";
import Card2 from "../MainCard/Card2";
import rightArrow from "/assets/Group 24.svg";
import gardenCardImg1 from "/assets/alleins.png";
import gardenCardImg2 from "/assets/showerjack.png";
import gardenCardImg3 from "/assets/flowers.png";
import gardenCardImg4 from "/assets/Group 905520.png";
import Slider from "react-slick";

import "./garden.scss";

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
          <div
            id="view-deal-head"
            className="flex gap-2 justify-center items-center"
          >
            <span className="text-[#292D32] font-semibold text-lg">
              View All
            </span>
            <Link to={"/"}>
              <img src={rightArrow} alt="right-arrow" />
            </Link>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <Card2
                imageURL={gardenCardImg1}
                cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </div>
            <div>
              <Card2
                imageURL={gardenCardImg2}
                cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </div>
            <div>
              <Card2
                imageURL={gardenCardImg3}
                cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </div>
            <div>
              <Card2
                imageURL={gardenCardImg4}
                cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </div>
            <div>
              <Card2
                imageURL={gardenCardImg1}
                cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </div>
            <div>
              <Card2
                imageURL={gardenCardImg2}
                cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </div>
            <div>
              <Card2
                imageURL={gardenCardImg4}
                cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
                cardPrice="44"
                cardNotPrice="33.98"
                cardDiscount="-10%"
              />
            </div>
          </Slider>
        </div>
        {/* <div className="flex gap-2 justify-center items-center mt-6 mx-auto">
          <div id="gardenCard1">
            <Card2
              imageURL={gardenCardImg1}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
            />
          </div>

          <div id="gardenCard2">
            <Card2
              imageURL={gardenCardImg2}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
            />
          </div>
          <div id="gardenCard3">
            <Card2
              imageURL={gardenCardImg3}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
            />
          </div>
          <div id="gardenCard4">
            <Card2
              imageURL={gardenCardImg4}
              cardDes="Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden..."
              cardPrice="44"
              cardNotPrice="33.98"
              cardDiscount="-10%"
            />
          </div>
        </div> */}
      </section>
    </main>
  );
};

export default Graden;
