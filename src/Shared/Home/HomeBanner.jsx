
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'



const HomeBanner = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className="carousel w-full h-[600px] mt-3.5 rounded">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="h-full w-full flex items-center absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-4/6 md:w-3/5 lg:w-3/5 pl-10 md:pl-12 lg:pl-20'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 mr-5 ">Discover More</button>
                                <button className="btn bg-transparent hover:bg-transparent border border-white hover:border-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 text-white">Latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>

                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-xl " />
                    <div className="h-full w-full flex items-center absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-4/6 md:w-3/5 lg:w-3/5 pl-10 md:pl-12 lg:pl-20'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 mr-5 ">Discover More</button>
                                <button className="btn bg-transparent hover:bg-transparent border border-white hover:border-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 text-white">Latest Project</button></div>
                        </div>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide1" className="btn btn-circle mr-5  bg-[#FF3811] border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle  bg-[#FF3811] border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl " />
                    <div className="h-full w-full flex items-center absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-4/6 md:w-3/5 lg:w-3/5 pl-10 md:pl-12 lg:pl-20'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 mr-5 ">Discover More</button>
                                <button className="btn bg-transparent hover:bg-transparent border border-white hover:border-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 text-white">Latest Project</button></div>
                        </div>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide2" className="btn btn-circle mr-5  bg-[#FF3811] border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle  bg-[#FF3811] border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-xl " />
                    <div className="h-full w-full flex items-center absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-4/6 md:w-3/5 lg:w-3/5 pl-10 md:pl-12 lg:pl-20'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 mr-5 ">Discover More</button>
                                <button className="btn bg-transparent hover:bg-transparent border border-white hover:border-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 text-white">Latest Project</button></div>
                        </div>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide3" className="btn btn-circle mr-5  bg-[#FF3811] border-none">❮</a>
                        <a href="#slide5" className="btn btn-circle  bg-[#FF3811] border-none">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full rounded-xl " />
                    <div className="h-full w-full flex items-center absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-4/6 md:w-3/5 lg:w-3/5 pl-10 md:pl-12 lg:pl-20'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 mr-5 ">Discover More</button>
                                <button className="btn bg-transparent hover:bg-transparent border border-white hover:border-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 text-white">Latest Project</button></div>
                        </div>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide4" className="btn btn-circle mr-5  bg-[#FF3811] border-none">❮</a>
                        <a href="#slide6" className="btn btn-circle  bg-[#FF3811] border-none">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full rounded-xl " />
                    <div className="h-full w-full flex items-center absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 w-4/6 md:w-3/5 lg:w-3/5 pl-10 md:pl-12 lg:pl-20'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 mr-5 ">Discover More</button>
                                <button className="btn bg-transparent hover:bg-transparent border border-white hover:border-white sm:py-2 sm:px-3 text-xs md:text-sm md:py-3 md:px-5 text-white">Latest Project</button></div>
                        </div>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide5" className="btn btn-circle mr-5  bg-[#FF3811] border-none">❮</a>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeBanner;