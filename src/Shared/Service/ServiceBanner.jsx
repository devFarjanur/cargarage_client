import img from '../../../assets/images/banner/4.jpg';


const ServiceBanner = () => {
    
    return (
        <div>
            <div className="carousel w-full h-[300px] mt-3.5">
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img} className="w-full rounded-xl " />
                    <div className="h-full w-full flex items-center absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-2/4 pl-20'>
                            <h2 className='text-4xl font-bold'>Add New Service</h2>
                            <div className='absolute bottom-0 left-0 right-0 text-center'>
                                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white text-xl font-normal px-16 border-none">Home/Service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;