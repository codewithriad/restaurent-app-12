import HeroOverlay from "../../../Components/shared/HeroOverlay/HeroOverlay";

const Hero = () => {
  return (
    <>
      <div
        className={`bg-menu-image bg-cover bg-center lg:h-[80vh] flex items-center justify-center`}
      >
        <HeroOverlay
          bgImage={"menu-image"}
          heading={"OUR MENU"}
          subHeading={"would you like to try a dish"}
        />
      </div>
    </>
  );
};

export default Hero;
