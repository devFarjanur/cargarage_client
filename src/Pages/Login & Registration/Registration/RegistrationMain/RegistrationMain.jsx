import Footer from "../../../../Shared/Footer/Footer";
import Navbar from "../../../../Shared/Navbar/Navbar";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const RegistrationMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <RegistrationForm></RegistrationForm>
            <Footer></Footer>
        </div>
    );
};

export default RegistrationMain;