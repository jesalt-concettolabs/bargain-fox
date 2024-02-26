import "./hero.scss";
import bannerImg from "/assets/banner.png";
import kitchenImg from "/assets/Image 11.png";
import healthBeautyImg from "/assets/Image 12.png";
import electronicImg from "/assets/Image 14.png";
import toysImg from "/assets/Image 15.png";
import sportsImg from "/assets/Image 17.png";
import clearnceImg from "/assets/Image 19.png";

const Hero = () => {
  return (
    <main>
      <section className="container flex items-center justify-center">
        <div
          id="hero-upperpart"
          className="flex gap-6 w-[80%] justify-center items-center pb-3"
        >
          <div
            id="part1-hero"
            className="flex gap-6 justify-center items-center text-center"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={kitchenImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Home & Kitchen</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={healthBeautyImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Health & Beauty</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={electronicImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Electronics</span>
            </div>
          </div>
          <div
            id="part2-hero"
            className="flex gap-6 justify-center items-center text-center"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={toysImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Toys & Carfts</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={sportsImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Sport & Leisure</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={clearnceImg}
                alt="kitchenimg"
                className="imageSize w-[90px] h-[90px]"
              />
              <span className="pt-2 font-medium text-sm">Clearnce</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto">
        <img src={bannerImg} alt="banner-img" width="100%" />
      </section>
    </main>
  );
};

export default Hero;
