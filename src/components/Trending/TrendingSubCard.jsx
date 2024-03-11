import { Link } from "react-router-dom";
import dealImg from "/assets/deals.png";
import trendImg from "/assets/Group 905725.png";
import clearanceImg from "/assets/artboard.png";

const trendingSubCardData = [
  {
    id: 1,
    cardName: "Deals of the Week",
    cardLink: "/",
    cardImg: dealImg,
  },
  {
    id: 2,
    cardName: "Trending",
    cardLink: "/",
    cardImg: trendImg,
  },
  {
    id: 3,
    cardName: "Clearance",
    cardLink: "/",
    cardImg: clearanceImg,
  },
];

const TrendingSubCard = () => {
  return (
    <main className="flex flex-col sm:flex-row justify-between items-center gap-6">
      {trendingSubCardData.map((item) => (
        <section
          key={item.id}
          className="flex flex-col justify-center items-center"
        >
          <div>
            <img src={item.cardImg} alt={item.cardName} />
          </div>
          <div className="flex flex-col justify-center items-center pt-2">
            <span className="text-center text-[#292D32] sm:text-sm lg:text-xl font-semibold ">
              {item.cardName}
            </span>
            <Link to={item.cardLink}>
              <span className="text-center sm:text-[12px] lg:text-[16px] text-[#FF7900] ">
                View All Products
              </span>
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
};

export default TrendingSubCard;
