import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const SingleService = () => {

    const services = useLoaderData();
    const { _id, serviceImage, serviceName, servicePrice, serviceDescription } = services;

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-2xl">
                <div className="h-[400px] lg:h-[600px] grid grid-cols-2 bg-white rounded-lg shadow-2xl my-10">
                    <div className="w-5/6 xl-w-3/4 border-2 h-[250] lg:h-[400px] m-auto">
                        <img
                            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] m-auto"
                            src={serviceImage}
                            alt={serviceName}
                        />

                    </div>

                    <div className="w-5/6 xl-w-1/2 p-4 my-auto">
                        <h2 className="text-sm font-semibold text-gray-700">Car Service</h2>
                        <h2 className="text-3xl font-semibold text-gray-800">{serviceName}</h2>
                        <p className="text-gray-700 text-2xl font-medium mt-2">{servicePrice}</p>
                        <p className="text-gray-700 text-lg font-medium mt-2">Service Description: </p>
                        <p className="text-gray-700">{serviceDescription}</p>
                        <button className="mt-4 btn btn-primary hover:scale-105">
                            Appoinment
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleService;