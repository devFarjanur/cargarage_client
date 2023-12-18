import { Link , useLoaderData } from "react-router-dom";

const HomeService = (props) => {

    const { serviceImage, serviceName, servicePrice } = props.service;

    return (
        <div className="w-[290px] md:w-[345px] lg:w-[305px] xl:w-[285px] 2xl:w-[310px] mx-auto">
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
        </div>

    );
};

const HomeServices = () => {

    const services = useLoaderData();

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="px-16 lg:px-52 2xl:px-72 text-center">
                <p className="text-[#FF3811] text-xl lg:text-2xl font-bold">Service</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-black">Our Service Area</h1>
                <p className="text-lg text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="py-6 grid grid-cols-1 gap-4 md:py-8 sm:py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map(service => (
                    <HomeService key={service._id} service={service}></HomeService>
                ))}
            </div>

        </div>
    );
};

export default HomeServices;