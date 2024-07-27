import './RecOverlay.css';
const RecOverlay = ({ heading, subHeading }) => {
  return (
    <>
      <div
        className={`recbg bg-cover bg-center lg:h-[50vh] flex items-center justify-center`} 
      >
        <div className="z-40 bg-black bg-opacity-40 text-center flex justify-center items-center text-white flex-col uppercase py-20 px-64 lg:w-[70rem]">
          
            <h1 className="lg:text-5xl mb-4 md:font-medium">{heading}</h1>
            <p className="lg:text-[18px]">{subHeading}</p>
          
        </div>
      </div>
    </>
  );
};

export default RecOverlay;
