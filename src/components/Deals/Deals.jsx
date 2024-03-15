import CardHeader from "../CardHeader/CardHeader";
import SliderComponent from "../Slider/SliderComponent";
import { dealCardData } from "../../constants/dealCardData";

const Deals = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 justify-center items-center mt-6">
        <CardHeader cardTitle="Deals of the Day" />
        <SliderComponent
          data={dealCardData}
          xlSlide={5}
          lgSlide={4}
          mdSlide={3}
          smSlide={1}
          dealCardStatus="true"
        />
      </section>
    </main>
  );
};

export default Deals;
