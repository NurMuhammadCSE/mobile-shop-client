import { useState, useEffect } from "react";
import PhoneItem from "../../Shared/PhoneItem/PhoneItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularPhone = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => {
        const popularPhone = data.filter((item) => item.brand === "Popular");
        setPhones(popularPhone);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="my-10 grid md:grid-cols-3 gap-10">
        {phones.map((phone) => (
          <PhoneItem key={phone.price} phone={phone}></PhoneItem>
        ))}
      </div>
    </div>
  );
};

export default PopularPhone;
