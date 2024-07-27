import FoodItems from "../../../Components/shared/FoodItems/FoodItems";
import RecOverlay from "../../../Components/shared/RecOverlay/RecOverlay";

const Desserts = () => {
  return (
    <>
      <div className="mb-12">
        <RecOverlay
          heading={"Desserts"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
          }
        />
      </div>
      {/* Food Item */}
      <FoodItems/>
    </>
  );
};

export default Desserts;
