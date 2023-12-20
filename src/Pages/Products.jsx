import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import ProductsBanner from "../Shared/Product/ProductsBanner";


const Product = (props) => {

    const { _id, productImage, productName, productPrice } = props.product;

    return (
        <div className="w-[290px] md:w-[345px] lg:w-[305px] xl:w-[285px] 2xl:w-[310px] mx-auto">

            <Link to={`/product/singleproduct/${_id}`}>
                <div className="card w-full bg-white shadow-2xl">
                    <figure className="px-6 pt-6">
                        <img src={productImage} alt="" className="rounded-xl w-[200px] h-[200px] object-cover border-2 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center p-6">
                        <h2 className="text-black text-xl font-semibold">{productName}</h2>
                        <p className="text-black text-lg font-semibold">{productPrice}</p>
                        <div className="card-actions mt-4">
                            <Link to>
                                <button className="btn btn-primary">Add To Cart</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </Link>


        </div>
    );
};


const Products = () => {

    const products = useLoaderData();


    return (
        <div>

            <Navbar></Navbar>
            <ProductsBanner></ProductsBanner>
            <div className="max-w-screen-xl mx-auto my-8">
                <div className="py-6 grid grid-cols-1 gap-4 md:py-8 sm:py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map(product => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>

            </div>
            <Footer></Footer>

        </div>
    );
};

export default Products;