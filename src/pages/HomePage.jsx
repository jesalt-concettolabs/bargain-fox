import Hero from "../components/Hero/Hero";
import Deals from "../components/Deals/Deals";
import Trending from "../components/Trending/Trending";
import Graden from "../components/Garden-part/Graden";
import Newsletter from "../components/Newsletter/Newsletter";
import Electronics from "../components/Electronics/Electronics";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Deals />
      <Trending />
      <Graden />
      <Newsletter />
      <Electronics />
    </>
  );
};

export default HomePage;
