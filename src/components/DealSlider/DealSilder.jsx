import womanImg from "/assets/womans.png";
import shoe1Img from "/assets/shoe2.png";
import shoe2Img from "/assets/shoes.png";
import manImg from "/assets/man.png";
import sunglassImg from "/assets/sunglasses.png";
import ringImg from "/assets/gold-ring.png";
import Card1 from "../Card1/Card1";
import Slider from "react-slick";

const DealSilder = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
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
          slidesToScroll: 3,
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
    <div className="slider-container w-full">
      <Slider {...settings}>
        <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
          <Card1
            imageurl={womanImg}
            offerName="Women's Western Clothing"
            offerText="Upto 40% off"
          />
        </div>
        <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
          <Card1
            imageurl={manImg}
            offerName="Men's Western Clothing"
            offerText="Upto 40% off"
          />
        </div>
        <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
          <Card1
            imageurl={shoe1Img}
            offerName="Casual Shoes"
            offerText="Upto 50% off"
          />
        </div>
        <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
          <Card1
            imageurl={shoe2Img}
            offerName="Men's Running shoes"
            offerText="Upto 50% off"
          />
        </div>
        <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
          <Card1
            imageurl={ringImg}
            offerName="Statement Fashion Jewellery"
            offerText="Upto 20% off"
          />
        </div>
        <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
          <Card1
            imageurl={sunglassImg}
            offerName="Sunglasses"
            offerText="Upto 10% off"
          />
        </div>
      </Slider>
    </div>
    // <div className="w-full flex gap-2 ">
    //   <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
    //     <Card1
    //       imageurl={womanImg}
    //       offerName="Women's Western Clothing"
    //       offerText="Upto 40% off"
    //     />
    //   </div>
    //   <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
    //     <Card1
    //       imageurl={manImg}
    //       offerName="Men's Western Clothing"
    //       offerText="Upto 40% off"
    //     />
    //   </div>
    //   <div className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl">
    //     <Card1
    //       imageurl={shoe1Img}
    //       offerName="Casual Shoes"
    //       offerText="Upto 50% off"
    //     />
    //   </div>
    //   <div
    //     id="dealCard4"
    //     className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl"
    //   >
    //     <Card1
    //       imageurl={shoe2Img}
    //       offerName="Men's Running shoes"
    //       offerText="Upto 50% off"
    //     />
    //   </div>
    //   <div
    //     id="dealCard5"
    //     className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl"
    //   >
    //     <Card1
    //       imageurl={ringImg}
    //       offerName="Statement Fashion Jewellery"
    //       offerText="Upto 20% off"
    //     />
    //   </div>
    //   <div
    //     id="dealCard6"
    //     className="border-2 border-solid border-[#F5F5FC] rounded-t-2xl"
    //   >
    //     <Card1
    //       imageurl={sunglassImg}
    //       offerName="Sunglasses"
    //       offerText="Upto 10% off"
    //     />
    //   </div>
    // </div>
  );
};

export default DealSilder;
