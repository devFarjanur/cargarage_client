import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import AddressContact from "../../Home/AddressContact/AddressContact";
import ContactForm from "../ContactForm/ContactForm";

const ContactMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactForm></ContactForm>
            <AddressContact></AddressContact>
            <Footer></Footer>
        </div>
    );
};

export default ContactMain;