import HeroOverlay from "../../Components/shared/HeroOverlay/HeroOverlay"


const OurShop = () => {
  return (
    <div className={`bg-shop-image bg-cover bg-center lg:h-[80vh] flex items-center justify-center`}>
     <HeroOverlay bgImage={'shop-image'} heading={'our shop'} subHeading={'would you like to try a dish?'}/> 
    </div>
  )
}

export default OurShop