
import Footer from "../Shared/Footer";
import HomeAbout from "../Shared/Home/HomeAbout";
import HomeBanner from "../Shared/Home/HomeBanner";
import HomeContact from "../Shared/Home/HomeContact";
import HomeFeatures from "../Shared/Home/HomeFeatures";
import HomeProducts from "../Shared/Home/HomeProducts";
import HomeServices from "../Shared/Home/HomeServices";
import HomeTeam from "../Shared/Home/HomeTeam";
import Navbar from "../Shared/Navbar";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeServices></HomeServices>
            <HomeContact></HomeContact>
            <HomeProducts></HomeProducts>
            <HomeTeam></HomeTeam>
            <HomeFeatures></HomeFeatures>
            <Footer></Footer>
        </div>
    );
};

export default Home;