import bannerImg from "/assets/banner.png";
import HeroCard from "../Cards/HeroCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { categoryList } from "../../api/constant";
import Loader from "../Loader/Loader";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(categoryList);
      if (response.status === 200) {
        setHeroData(response.data.result);
        setLoading(false);
      }
    } catch (error) {
      console.log("Category API error: ", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <section className="container flex items-center justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 xl:flex gap-6 w-[80%] justify-center items-center">
          {heroData &&
            heroData.map((item) => (
              <div key={item.id}>
                <HeroCard data={item} />
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
