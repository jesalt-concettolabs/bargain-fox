import Slider from "react-slick";
import "./productImgSlider.scss";

const ProductImgSlider = ({ onClick, imagesData }) => {
  const settings = {
    dots: false,
    infinite: false,
    arrow: false,
    slidesToShow: imagesData.length > 3 ? 4 : imagesData.length,
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
              className="w-[70px] h-[120px] object-cover overflow-hidden outline-none cursor-pointer"
            >
              <img
                src={item.product_image_url}
                alt="product images"
                className="object-cover h-auto w-auto overflow-hidden"
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
