import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Products from "./Products";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;