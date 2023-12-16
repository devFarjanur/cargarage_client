import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const HomeAbout = () => {
    return (
        <div>
            <div className="hero bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full lg:w-1/2 relative mt-24 lg:mb-44'>
                        <img src={person} className="w-[380px] h-[380px] lg:w-[300px] lg:h-[340px] xl:w-[340px] xl:h-[380px] 2xl:w-[340px] 2xl:h-[380px] rounded-lg" />
                        <img src={parts} className="absolute top-1/2 sm:right-16 md:right-48 w-[300px] h-[300px] lg:right-20 lg:w-[240px] lg:h-[240px] xl:right-36 xl:w-[280px] xl:h-[280px] 2xl:right-48 2xl:w-[280px] 2xl:h-[285px] rounded-lg border-8 border-white" />
                    </div>

                    <div className='w-full pt-32 pb-12 lg:pt-12 lg:w-1/2'>
                        <p className='text-[#FF3811] font-bold mb-5 text-xl lg:text-2xl text-center lg:text-left'>About Us</p>
                        <h1 className="text-3xl lg:text-4xl font-bold text-black mb-7 pr-6">We are qualified & of experience in this field</h1>
                        <p className="text-lg py-3 lg:py-6 text-black mb-5 pr-6 lg:pr-28">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='text-lg text-black mb-7 pr-6 lg:pr-28'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <div className='text-center lg:text-left'>
                            <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-none text-white py-2 px-4 text-xs lg:text-sm lg:py-3 lg:px-5 mr-5 rounded mx-auto">Get Started</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default HomeAbout;