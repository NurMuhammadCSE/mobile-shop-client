import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularPhone from "../PopularPhone/PopularPhone";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularPhone></PopularPhone>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;