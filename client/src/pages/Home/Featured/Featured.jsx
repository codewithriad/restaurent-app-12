

import TitleName from "../../../Components/shared/TitleName/TitleName";
import featuredImg from '../../../assets/home/featured.jpg';


const Featured = () => {

  return (
    <section className="pt-4 relative text-white"
    >

      {/* background image with overlay */}
      <div className="absolute bg-fixed inset-0 bg-featured-image bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>

      {/* content area */}

      <div className="relative z-50 flex justify-center items-center flex-col">
        <TitleName heading={'from our menu'} subHeading={'check it out'} />

        <div className="flex justify-center items-center lg:flex-row md:flex-col py-20 px-36 gap-20">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <h3 className="text-2xl mb-2">Jul 2, 2024 <br /> Where Can I Get Some?</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur, omnis ipsam dolorum harum mollitia illum officiis fugit cumque dolore vitae quos quibusdam officia! Eum suscipit corporis doloribus ipsa delectus accusantium magnam corrupti illo facilis eveniet iste molestiae, reprehenderit blanditiis unde quasi quia, voluptatem earum! Quidem deleniti amet iure quibusdam?</p>
            <button>Order Now</button>
          </div>
        </div>

      </div>








    </section>

  )
}

export default Featured