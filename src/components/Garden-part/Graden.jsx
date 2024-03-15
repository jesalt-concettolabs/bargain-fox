import { gardenCardData } from "../../constants/gardenCardData";
import CardHeader from "../CardHeader/CardHeader";
import SliderComponent from "../Slider/SliderComponent";

const Graden = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader cardTitle=" Garden & DIY" />
        <SliderComponent
          data={gardenCardData}
          xlSlide={4}
          lgSlide={3}
          mdSlide={2}
          smSlide={1}
          mainCardStatus="true"
        />
      </section>
    </main>
  );
};

export default Graden;
