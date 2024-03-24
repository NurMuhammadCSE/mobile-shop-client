// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Category.css";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/category/w.jpg";
import img2 from "../../../assets/category/w2.jpg";
import img3 from "../../../assets/category/w3.jpg";
import img4 from "../../../assets/category/w4.jpg";
import img5 from "../../../assets/category/w5.jpg";
import img6 from "../../../assets/category/w6.jpg";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-10">
      <SectionTitle
        heading={"Smart Watch"}
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
          <img src={img1} className="w-[200px]" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-[200px]" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-[200px]" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-[200px]" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-[200px]" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="w-[200px]" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

Category;
