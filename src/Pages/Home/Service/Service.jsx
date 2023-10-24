
const Service = () => {
    return (
        <div>
            <div className="px-72 text-center">
                <p className="text-[#FF3811] text-xl font-bold">Service</p>
                <h1 className="text-5xl font-bold text-black">Our Service Area</h1>
                <p className="text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="card w-96 bg-white shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn border-[#FF3811] hover:border-[#FF3811] text-[#FF3811] bg-white hover:bg-white text-lg px-5 rounded ">More Services</button>
            </div>
        </div>
    );
};

export default Service;