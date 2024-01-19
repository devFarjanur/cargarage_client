
import Footer from "../Shared/Footer";
import HomeAbout from "../Shared/Home/HomeAbout";
import HomeBanner from "../Shared/Home/HomeBanner";
import HomeContact from "../Shared/Home/HomeContact";
import HomeProducts from "../Shared/Home/HomeProducts";
import HomeServices from "../Shared/Home/HomeServices";
import Navbar from "../Shared/Navbar";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeProducts></HomeProducts>
            <HomeContact></HomeContact>
            <HomeServices></HomeServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;