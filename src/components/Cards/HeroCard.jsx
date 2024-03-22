const HeroCard = ({ data }) => {
  const { thumbnail_image_url, seo_title, title } = data;
  return (
    <main className="relative flex flex-col justify-center items-center">
      <section className="flex flex-col gap-2 justify-center items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full">
          <img
            src={thumbnail_image_url}
            alt={seo_title}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <span className="font-normal text-center min-h-14">{title}</span>
      </section>
    </main>
  );
};

export default HeroCard;
