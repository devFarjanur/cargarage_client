import About from "../About/About";
import AddressContact from "../AddressContact/AddressContact";
import Banner from "../Banner/Banner";
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
            <AddressContact></AddressContact>
            <Product></Product>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;