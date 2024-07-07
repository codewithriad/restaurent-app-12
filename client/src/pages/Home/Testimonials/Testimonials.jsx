// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import TitleName from "../../../Components/shared/TitleName/TitleName";
import quotes from '../../../assets/home/quotes.png';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <TitleName heading="Testimonials" subHeading="When Our Client Say" />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center px-12 my-12">
              <Rating className="mx-auto my-6" style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <img className="w-16 h-w-16 mx-auto mb-10" src={quotes} alt="" />
              <p>{review.details}</p>
              <h3 className="text-2xl text-yellow-500 font-medium">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
