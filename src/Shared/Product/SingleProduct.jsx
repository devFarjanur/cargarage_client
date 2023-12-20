import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const SingleProduct = () => {

    const products = useLoaderData();

    const { _id, productImage, productName, productPrice } = products;

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={productImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{productName}</h1>
                        <p className="py-6">{productPrice}</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;