import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Product from "../Product/Product";
import Service from "../Service/Service";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contact></Contact>
            <Product></Product>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;