import { Link } from "react-router-dom";
import bannerImg from "/assets/banner.png";
import { heroCardData } from "../../constants/heroCardData";
import HeroCard from "../Cards/HeroCard";

const Hero = () => {
  return (
    <main>
      <section className="container flex items-center justify-center">
        <div className="grid grid-cols-3 md:flex gap-6 w-[80%] justify-center items-center pb-3">
          {heroCardData.map((item) => (
            <div key={item.id}>
              <Link to={item.heroCardUrl}>
                <HeroCard data={item} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto">
        <img src={bannerImg} alt="banner-img" width="100%" />
      </section>
    </main>
  );
};

export default Hero;
