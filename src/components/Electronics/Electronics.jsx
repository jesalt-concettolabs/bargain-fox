import { electronicCardData } from "../../constants/electronicCardData";
import CardHeader from "../CardHeader/CardHeader";
import SliderComponent from "../Slider/SliderComponent";

const Electronics = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader cardTitle="Electronics" />
        <SliderComponent
          data={electronicCardData}
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

export default Electronics;
