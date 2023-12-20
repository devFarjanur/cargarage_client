import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import ServiceBanner from "../Shared/Service/ServiceBanner";

const Service = (props) => {

    const { _id, serviceImage, serviceName, servicePrice } = props.service;

    return (
        <div className="w-[290px] md:w-[345px] lg:w-[305px] xl:w-[285px] 2xl:w-[310px] mx-auto">

            <Link to={`/service/singleservice/${_id}`}>
                <div className="card w-full bg-white shadow-2xl">
                    <figure className="px-6 pt-6">
                        <img src={serviceImage} alt="" className="rounded-xl w-[200px] h-[200px] object-cover" />
                    </figure>
                    <div className="card-body items-center text-center p-6">
                        <h2 className="text-black text-xl font-semibold">{serviceName}</h2>
                        <p className="text-black text-lg font-semibold">{servicePrice}</p>
                        <div className="card-actions mt-4">
                            <Link to>
                                <button className="btn btn-primary">Appoinment</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </Link>

        </div>


    );
};

const Services = () => {

    const services = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <ServiceBanner></ServiceBanner>
            <div className="max-w-screen-xl mx-auto my-8">
                <div className="py-6 grid grid-cols-1 gap-4 md:py-8 sm:py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map(service => (
                        <Service key={service._id} service={service}></Service>
                    ))}
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;