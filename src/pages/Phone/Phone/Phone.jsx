import usePhone from "../../../hooks/usePhone";
import PhoneCategory from "../PhoneCategory/PhoneCategory";

import apple from "../../../assets/images/IPHONE.jfif";

const Phone = () => {
  const [phones] = usePhone();

  const huawei = phones.filter((item) => item.brand === "Huawei");
  const Apple = phones.filter((item) => item.brand === "Apple");
  const Samsung = phones.filter((item) => item.brand === "Samsung");
  const Google = phones.filter((item) => item.brand === "Google");
  const Oppo = phones.filter((item) => item.brand === "Oppo");

  return (
    <div>
      <PhoneCategory
        img={
          "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={"Huawei"}
        items={huawei}
      ></PhoneCategory>

      <PhoneCategory img={apple} title={"Apple"} items={Apple}></PhoneCategory>

      <PhoneCategory
        img={
          "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=1407&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={"Google"}
        items={Google}
      ></PhoneCategory>

      <PhoneCategory img={'https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} title={"Oppo"} items={Oppo}></PhoneCategory>

      <PhoneCategory
        img={
          "https://images.unsplash.com/photo-1522202195465-df8a5f26fa15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={"Samsung"}
        items={Samsung}
      ></PhoneCategory>
    </div>
  );
};

export default Phone;
