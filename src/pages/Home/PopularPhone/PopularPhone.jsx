// import { useState, useEffect } from "react";
import PhoneItem from "../../Shared/PhoneItem/PhoneItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePhone from "../../../hooks/usePhone";

const PopularPhone = () => {
  // const [phones, setPhones] = useState([]);
  // useEffect(() => {
  //   fetch("phones.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularPhone = data.filter((item) => item.brand === "Popular");
  //       setPhones(popularPhone);
  //     });
  // }, []);

  const [phone] = usePhone();
  const popularPhones = phone.filter((item) => item.brand === "Popular");

  return (
    <div>
      <SectionTitle heading="From Our Phone"></SectionTitle>
      <div className="my-10 grid md:grid-cols-3 gap-10">
        {popularPhones.map((phone) => (
          <PhoneItem key={phone.price} phone={phone}></PhoneItem>
        ))}
      </div>
    </div>
  );
};

export default PopularPhone;
