import { Link } from "react-router-dom";
import bannerImg from "/assets/banner.png";
import HeroCard from "../Cards/HeroCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { categoryList } from "../../api/constant";

const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(categoryList);
      setHeroData(response.data.result);
    } catch (error) {
      console.log("Category API error: ", error);
    }
  };
  console.log(heroData);
  return (
    <main>
      <section className="container flex items-center justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 xl:flex gap-6 w-[80%] justify-center items-center pb-3">
          {heroData.map((item) => (
            <div key={item.id}>
              <Link to={"/"}>
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
