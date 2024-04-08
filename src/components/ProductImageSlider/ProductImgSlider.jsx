import Slider from "react-slick";
import "./productImgSlider.scss";

const ProductImgSlider = ({ onClick, imagesData }) => {
  const settings = {
    dots: false,
    infinite: false,
    arrow: false,
    slidesToShow: imagesData.length,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <main id="product-detail-slider">
      <div className="slider-container">
        <Slider {...settings}>
          {imagesData.map((item, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] overflow-hidden outline-none cursor-pointer"
            >
              <img
                src={item.product_image_url}
                alt="product images"
                width="150px"
                height="150px"
                className="object-contain overflow-hidden"
                onClick={() => onClick(item.product_image_url)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default ProductImgSlider;
