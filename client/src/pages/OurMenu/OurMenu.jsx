import Desserts from "./Desserts/Desserts"
import FoodItems from "./FoodItems/FoodItems"
import Hero from "./Hero/Hero"
import Pizza from "./Pizza/Pizza"
import Salad from "./Salad/Salad"


const OurMenu = () => {
  return (
    <>
      <Hero/>
      <FoodItems/>
      <Desserts/>
      <Pizza/>
      <Salad/>
    </>

  )
}

export default OurMenu