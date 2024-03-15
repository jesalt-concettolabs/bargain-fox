import CardHeader from "../CardHeader/CardHeader";
import { trendingCardData } from "../../constants/trendingCardData";
import TrendingSubCard from "./TrendingSubCard";
import SliderComponent from "../Slider/SliderComponent";

const Trending = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader cardTitle="Trending on BargainFox" />
        <SliderComponent
          data={trendingCardData}
          xlSlide={6}
          lgSlide={4}
          mdSlide={3}
          smSlide={2}
          trendingCardStatus="true"
        />
        <div className="w-[80%] mx-auto mt-10">
          <TrendingSubCard />
        </div>
      </section>
    </main>
  );
};

export default Trending;
