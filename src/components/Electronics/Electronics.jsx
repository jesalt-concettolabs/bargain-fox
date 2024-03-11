import "../Garden-part/garden.scss";
import { Link } from "react-router-dom";
import Card2 from "../MainCard/Card2";
import rightArrow from "/assets/Group 24.svg";
import Slider from "react-slick";
import { electronicCardData } from "../../constants/electronicCardData";
import CardHeader from "../CardHeader/CardHeader";
import { silderSetting } from "../../constants/sliderSetting";

const Electronics = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader cardTitle="Electronics" />
        <div className="slider-container">
          <Slider {...silderSetting}>
            {electronicCardData.map((item) => (
              <div key={item.id}>
                <Link to={item.cardUrl}>
                  <Card2 data={item} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Electronics;
