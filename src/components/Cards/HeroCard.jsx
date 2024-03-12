const HeroCard = ({ data }) => {
  const { heroCardImg, heroCardName } = data;
  return (
    <main className="relative flex flex-col justify-center items-center">
      <section className="flex flex-col gap-2 justify-center items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full">
          <img
            src={heroCardImg}
            alt={heroCardName}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <span className="font-normal text-center ">{heroCardName}</span>
      </section>
    </main>
  );
};

export default HeroCard;
