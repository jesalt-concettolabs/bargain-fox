import Hero from "../components/Hero/Hero";
import Deals from "../components/Deals/Deals";
import Trending from "../components/Trending/Trending";
import Graden from "../components/Garden-part/Graden";
import Newsletter from "../components/Newsletter/Newsletter";
import Electronics from "../components/Electronics/Electronics";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
  const { userData } = useContext(UserContext);
  return (
    <>
      {userData ? (
        <div>
          <Hero />
          <Deals />
          <Trending />
          <Graden />
          <Newsletter />
          <Electronics />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;
