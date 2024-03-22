import { useEffect, useState } from "react";
import CardHeader from "../CardHeader/CardHeader";
import SliderComponent from "../Slider/SliderComponent";
import axios from "axios";
import { productList } from "../../api/constant";

const Electronics = () => {
  const [electronicData, setElectronicData] = useState([]);

  const electronicDataAPI = async () => {
    try {
      const response = await axios.post(productList);
      setElectronicData(response.data.result.data);
    } catch (error) {
      console.log("Produclist API Error: ", error);
    }
  };

  useEffect(() => {
    electronicDataAPI();
  }, []);

  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader cardTitle="Electronics" />
        <SliderComponent
          data={electronicData}
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
