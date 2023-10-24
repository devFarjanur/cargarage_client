import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative mt-24 mb-44'>
                        <img src={person} className="w-[380px] h-[380px] rounded-lg" />
                        <img src={parts} className="absolute top-1/2 right-44 w-[280px] h-[285px] rounded-lg border-8 border-white" />
                    </div>

                    <div className='w-1/2'>
                        <p className='text-[#FF3811] font-bold mb-5 text-xl'>About Us</p>
                        <h1 className="text-5xl font-bold text-black mb-7 pr-60">We are qualified & of experience in this field</h1>
                        <p className="py-6 text-black mb-5 pr-28">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='text-black mb-7 pr-28'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-none text-white px-6 py-4 rounded">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;