import Footer from "../../../Shared/Footer/Footer";

import Navbar from "../../../Shared/Navbar/Navbar";
import CheckOutBanner from "../CheckOutBanner/CheckOutBanner";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const CheckOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CheckOutBanner></CheckOutBanner>
            <CheckOutForm></CheckOutForm>
            <Footer></Footer>
        </div>
    );
};

export default CheckOut;