import { Link } from "react-router-dom";
import "./trending.scss";
import CardHeader from "../CardHeader/CardHeader";
import TrendingCard from "../Cards/TrendingCard";
import { trendingCardData } from "../../constants/trendingCardData";

const Trending = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 mt-6">
        <CardHeader cardTitle="Trending on BargainFox" />
        <div className="grid gap-6 grid-cols-3 sm:grid-cols-7">
          {trendingCardData.map((item) => (
            <Link key={item.id} to={item.cardLink}>
              <TrendingCard data={item} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Trending;
