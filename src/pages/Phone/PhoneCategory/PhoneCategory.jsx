/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PhoneItem from "../../Shared/PhoneItem/PhoneItem";
import Cover from "../../Shared/Cover/Cover";

const PhoneCategory = ({ title, items, img }) => {
  return (
    <div>
      {title && items && <Cover img={img} title={title}></Cover>}
      <div className="mt-10 grid md:grid-cols-3 gap-10 justify-center items-center">
        {items.map((item) => (
          <PhoneItem key={item.brand} phone={item}></PhoneItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 my-4">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PhoneCategory;
