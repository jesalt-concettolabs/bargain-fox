import { Link } from "react-router-dom";
import Card2 from "../MainCard/Card2";
import rightArrow from "/assets/Group 24.svg";
import Slider from "react-slick";
import "./garden.scss";
import { gardenCardData } from "../../constants/gardenCardData";
import CardHeader from "../CardHeader/CardHeader";
import { silderSetting } from "../../constants/sliderSetting";

const Graden = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader cardTitle=" Garden & DIY" />
        <div className="slider-container">
          <Slider {...silderSetting}>
            {gardenCardData &&
              gardenCardData.map((item) => {
                return (
                  <div key={item.id}>
                    <Link to={item.cardUrl}>
                      <Card2 data={item} />
                    </Link>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Graden;
