import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import Cover from "../../Shared/Cover/Cover";
import usePhone from "../../../hooks/usePhone";

import apple from "../../../assets/images/IPHONE.jfif";

const Order = () => {
  const [phones] = usePhone();
  const Huawei = phones.filter((phone) => phone.brand === "Huawei");
  const Apple = phones.filter((phone) => phone.brand === "Apple");
  const Samsung = phones.filter((phone) => phone.brand === "Samsung");
  const Google = phones.filter((phone) => phone.brand === "Google");
  const Oppo = phones.filter((phone) => phone.brand === "Oppo");

  const brands = ["Huawei", "Apple", "Samsung", "Google", "Oppo"];
  const { brand } = useParams();
  const initialIndex = brands.indexOf(brand);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  console.log(phones)
  return (
    <div>
      <Cover img={apple} title={"Our Phones"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center items-center my-2">
          <Tab>Huawei</Tab>
          <Tab>Apple</Tab>
          <Tab>Samsung</Tab>
          <Tab>Google</Tab>
          <Tab>Oppo</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={Huawei}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Apple}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Samsung}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Google}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Oppo}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
