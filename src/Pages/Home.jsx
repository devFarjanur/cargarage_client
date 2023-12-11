
import Footer from "../Shared/Footer";
import HomeAbout from "../Shared/Home/HomeAbout";
import HomeBanner from "../Shared/Home/HomeBanner";
import HomeContact from "../Shared/Home/HomeContact";
import HomeFeatures from "../Shared/Home/HomeFeatures";
import HomeProduct from "../Shared/Home/HomeProduct";
import HomeService from "../Shared/Home/HomeService";
import HomeTeam from "../Shared/Home/HomeTeam";
import Navbar from "../Shared/Navbar";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeService></HomeService>
            <HomeContact></HomeContact>
            <HomeProduct></HomeProduct>
            <HomeTeam></HomeTeam>
            <HomeFeatures></HomeFeatures>
            <Footer></Footer>
        </div>
    );
};

export default Home;