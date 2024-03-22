import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-15">
      <SectionTitle
        subHeading="What Our Client Say"
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.user}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <h3 className="text-2xl text-orange-400">{review.user}</h3>
              <p className="py-8">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
