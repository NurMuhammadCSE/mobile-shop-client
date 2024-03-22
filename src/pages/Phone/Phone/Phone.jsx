import usePhone from "../../../hooks/usePhone";
import PhoneCategory from "../PhoneCategory/PhoneCategory";

import apple from "../../../assets/images/IPHONE.jfif";

const Phone = () => {
  const [phones] = usePhone();
  console.log(phones)

  const huawei = phones.filter((item) => item.brand === "Huawei");
  const Apple = phones.filter((item) => item.brand === "Apple");
  const Samsung = phones.filter((item) => item.brand === "Samsung");
  const Google = phones.filter((item) => item.brand === "Google");
  const Oppo = phones.filter((item) => item.brand === "Google");

  return (
    <div>
      <PhoneCategory
        img={apple}
        title={"Huawei"}
        items={huawei}
      ></PhoneCategory>

      <PhoneCategory img={apple} title={"Apple"} items={Apple}></PhoneCategory>

      <PhoneCategory
        img={apple}
        title={"Samsung"}
        items={Google}
      ></PhoneCategory>

      <PhoneCategory img={apple} title={"Google"} items={Oppo}></PhoneCategory>

      <PhoneCategory img={apple} title={"Oppo"} items={Samsung}></PhoneCategory>
    </div>
  );
};

export default Phone;
