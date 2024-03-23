import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PhoneItem = ({ phone }) => {
  const { phone_name, price, rating, image } = phone;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={phone_name} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{phone_name}</h2>
          <p className="text-xl">$ {price}</p>
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default PhoneItem;
