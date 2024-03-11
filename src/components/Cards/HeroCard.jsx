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
      {/* <div
        id="heroHoverCard"
        className="absolute flex flex-col justify-center items-center bg-white top-[125px] p-4"
      >
        <span className="h-4 w-4 rounded-full bg-[#ff7900]"></span>
        <div>
          <ul>
            <li className="flex gap-10 relative">
              Home
              <ul className="absolute left-20 ">
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </li>
            <li>Kitchen</li>
            <li>Office</li>
          </ul>
        </div>
      </div> */}
    </main>
  );
};

export default HeroCard;
