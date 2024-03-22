// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/images/huawei.jpg";
import img2 from "../../../assets/images/ihone2.jpg";
import img3 from "../../../assets/images/iphone3.jpg";
import img4 from "../../../assets/images/iphone.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-10">
      <SectionTitle
        heading={"Our Brand"}
        subHeading={"Popular Brand"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img4} className="w-3/4" alt="" />
          {/* <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-3/4" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-3/4" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-3/4" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-3/4" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-3/4" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

Category;
