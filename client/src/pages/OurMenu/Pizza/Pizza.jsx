import FoodItems from "../../../Components/shared/FoodItems/FoodItems";
import RecOverlay from "../../../Components/shared/RecOverlay/RecOverlay";


const Pizza = () => {
  return (
    <>
        <RecOverlay heading={"Pizza"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer."}/>
        <FoodItems/>
    </>
  )
}

export default Pizza