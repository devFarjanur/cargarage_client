import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const SingleProduct = () => {

    const products = useLoaderData();

    const { _id, productImage, productName, productPrice, productDescription } = products;

    const addToCart = _id => {
        console.log(_id);
      };

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-2xl">
                <div className="h-[400px] lg:h-[600px] grid grid-cols-2 bg-white rounded-lg shadow-2xl my-10">
                    <div className="w-5/6 xl-w-3/4 border-2 h-[250] lg:h-[400px] m-auto">
                        <img
                            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] m-auto"
                            src={productImage}
                            alt={productName}
                        />

                    </div>

                    <div className="w-5/6 xl-w-1/2 p-4 my-auto">
                        <h2 className="text-sm font-semibold text-gray-700">Car Parts</h2>
                        <h2 className="text-3xl font-semibold text-gray-800">{productName}</h2>
                        <p className="text-gray-700 text-2xl font-medium mt-2">{productPrice}</p>
                        <p className="text-gray-700 text-lg font-medium mt-2">Product Description: </p>
                        <p className="text-gray-700">{productDescription}</p>
                        <button onClick={() => addToCart(_id)} className="mt-4 btn btn-primary hover:scale-105">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;