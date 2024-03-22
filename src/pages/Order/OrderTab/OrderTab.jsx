/* eslint-disable react/prop-types */
import PhoneCard from "../../Shared/PhoneCard/PhoneCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  // Slice the items array to only include the first 3 items if there are more than 5 items
  // const slicedItems = items.length > 5 ? items.slice(0, 3) : items;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item) => (
            <PhoneCard key={item._id} item={item} />
          ))}
        </div>
       
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;
