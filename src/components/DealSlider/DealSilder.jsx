import Card1 from "../Card1/Card1";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { silderSetting } from "../../constants/sliderSetting";
import { dealCardData } from "../../constants/dealCardData";

const DealSilder = () => {
  return (
    <div className="slider-container w-full">
      <Slider {...silderSetting}>
        {dealCardData.map((item) => (
          <div key={item.id}>
            <Link to={item.dealCardLink}>
              <Card1 data={item} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DealSilder;
