import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PhoneCard = ({ item }) => {
  const { phone_name, image, rating, price } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={phone_name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{phone_name}</h2>
          <p>{price}</p>
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
             Add to Cart
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
