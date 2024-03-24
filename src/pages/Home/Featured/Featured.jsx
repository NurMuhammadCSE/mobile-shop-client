import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/images/iphone3.jpg";
import { Link } from "react-router-dom";
import "./Featured.css";

const Featured = () => {
  return (
  <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle heading="Featured"></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img className="rounded-3xl" src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="uppercase">Mobile Mastery: Unleash the Future Today</p>
          <p>
            At Mobile Shop, we believe in the transformation power of technology
            to enrich lives and drive progress. Our passion lies in connecting
            people with the latest innovations that inspire, empower, and
            elevate everyday experiences. From sleek smartphones to cutting-edge
            accessories, each product in our curated collection is a testament
            to human ingenuity and creativity. We&apos;re more than just a shop;
            we&apos;re a gateway to a world of endless possibilities. Join us on
            this journey of exploration and discovery, as we harness the power
            of mobile technology to shape a brighter future for all
          </p>
          <Link to={"/phone"}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
