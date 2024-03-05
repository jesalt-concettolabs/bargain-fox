import Slider from "react-slick";
import prdImg1 from "/assets/prdImg1.png";
import flowerImg from "/assets/flowers.png";

import prdImg2 from "/assets/prdImg2.png";
import prdImg3 from "/assets/prdImg3.png";
import prdImg4 from "/assets/prdImg4.png";
import prdImg5 from "/assets/prdImg5.png";
import prdImg6 from "/assets/prdImg6.png";
import "./productImgSlider.scss";

const ProductImgSlider = ({ onClick }) => {
  const productImages = [
    prdImg1,
    prdImg2,
    prdImg3,
    prdImg4,
    prdImg5,
    prdImg6,
    flowerImg,
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrow: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {productImages.map((item, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] overflow-hidden cursor-pointer"
          >
            <img
              src={item}
              alt="product images"
              width="150px"
              height="150px"
              className="object-contain overflow-hidden"
              onClick={() => onClick(item)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImgSlider;
