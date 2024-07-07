const HeroOverlay = ({ heading, subHeading }) => {
  return (
    <div className="bg-menu-hero bg-cover bg-center lg:h-[80vh] flex items-center justify-center">

      <div className="z-40 bg-black bg-opacity-60 text-center flex justify-center items-center text-white flex-col uppercase py-32 px-96">
        <h1 className="lg:text-5xl mb-2 md:font-medium">{heading}</h1>
        <p className="lg:text-xl">{subHeading}</p>
      </div>
    </div>
  );
};

export default HeroOverlay;
