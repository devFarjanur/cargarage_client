import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import AddServiceForm from "../AddServiceForm/AddServiceForm";
import ServiceBanner from "../ServiceBanner/ServiceBanner";

const AddService = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ServiceBanner></ServiceBanner>
            <AddServiceForm></AddServiceForm>
            <Footer></Footer>
        </div>
    );
};

export default AddService;