import DealSilder from "../DealSlider/DealSilder";
import CardHeader from "../CardHeader/CardHeader";

const Deals = () => {
  return (
    <main>
      <section className="container w-[80%] flex flex-col gap-4 justify-center items-center mt-6">
        <CardHeader cardTitle="Deals of the Day" />
        <DealSilder />
      </section>
    </main>
  );
};

export default Deals;
