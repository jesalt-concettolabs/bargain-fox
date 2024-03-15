import { Link } from "react-router-dom";
import { trendingSubCardData } from "../../constants/sliderSetting";

const TrendingSubCard = () => {
  return (
    <main className="flex flex-col sm:flex-row justify-between items-center gap-6">
      {trendingSubCardData.map((item) => (
        <section
          key={item.id}
          className="flex flex-col justify-center items-center"
        >
          <Link to={item.cardLink}>
            <div>
              <img src={item.cardImg} alt={item.cardName} />
            </div>
            <div className="flex flex-col justify-center items-center pt-2">
              <span className="text-center text-[#292D32] sm:text-sm lg:text-xl font-semibold ">
                {item.cardName}
              </span>

              <span className="text-center sm:text-[12px] lg:text-[16px] text-[#FF7900] ">
                View All Products
              </span>
            </div>
          </Link>
        </section>
      ))}
    </main>
  );
};

export default TrendingSubCard;
