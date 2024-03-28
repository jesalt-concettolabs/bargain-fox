import axios from "axios";
import CardHeader from "../CardHeader/CardHeader";
import SliderComponent from "../Slider/SliderComponent";
import { productList } from "../../api/constant";
import { useEffect, useState } from "react";

const Graden = () => {
  const [gardenData, setGardenData] = useState([]);

  const gardenDataAPI = async () => {
    try {
      const response = await axios.post(productList);
      setGardenData(response.data.result.data);
    } catch (error) {
      console.log("Produclist API Error: ", error);
    }
  };

  useEffect(() => {
    gardenDataAPI();
  }, []);

  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader
          cardTitle=" Garden & DIY"
          path="/product-list/sports-leisure/garden-diy/gardening"
        />
        <SliderComponent
          data={gardenData}
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
