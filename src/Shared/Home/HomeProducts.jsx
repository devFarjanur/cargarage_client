import { Link , useLoaderData } from "react-router-dom";

const HomeProduct = (props) => {

    const { productImage, productName, productPrice } = props.product;

    return (
        <div className="w-[290px] md:w-[345px] lg:w-[305px] xl:w-[285px] 2xl:w-[310px] mx-auto">
            <div className="card w-full bg-white shadow-2xl">
                <figure className="px-6 pt-6">
                    <img src={productImage} alt="" className="rounded-xl w-[200px] h-[200px] object-cover" />
                </figure>
                <div className="card-body items-center text-center p-6">
                    <h2 className="text-black text-xl font-semibold">{productName}</h2>
                    <p className="text-black text-lg font-semibold">{productPrice}</p>
                    <div className="card-actions mt-4">
                        <Link to>
                            <button className="btn btn-primary">buy now</button>
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>

    );
};

const HomeProducts = () => {

    const products = useLoaderData();


    console.log("products:", products);

    if (!products || products.length === 0) {
        return <div>No products available</div>;
      }

    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <div className="px-10 mb-5 lg:px-20 xl:px-48 text-center">
                <p className="text-[#FF3811] text-xl lg:text-2xl font-bold">Popular Products</p>
                <h1 className="my-1 text-3xl lg:text-4xl font-bold text-black">Browse Our Products</h1>
                <p className="text-lg text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="py-6 grid grid-cols-1 gap-4 md:py-8 sm:py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map(product => (
                    <HomeProduct key={product._id} product={product}></HomeProduct>
                ))}
            </div>

        </div>
    );
};

export default HomeProducts;