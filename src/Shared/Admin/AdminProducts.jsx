
import { Link, useLoaderData } from "react-router-dom";


const AdminProduct = (props) => {

    const { productImage, productName, productPrice } = props.product;

    const handleDelete = _id => {
        console.log(_id);
    }



    return (
        <div className="w-[350px] h-[400px] sm:w-[280px] md:w-[320px] lg:w-[300px] xl:w-[280px] mx-auto">
            <div className="card w-full bg-white shadow-2xl">
                <figure className="px-6 pt-6">
                    <img src={productImage} alt="" className="rounded-xl w-[200px] h-[200px] object-cover" />
                </figure>
                <div className="card-body items-center text-center p-6">
                    <h2 className="text-black text-xl font-semibold">{productName}</h2>
                    <p className="text-black text-lg font-semibold">{productPrice}</p>
                    <div className="card-actions mt-4">
                        <Link to>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                        <button 
                        onClick={() => handleDelete(_id)} 
                        className="btn btn-primary">Delete</button>

                    </div>
                </div>
            </div>
        </div>

    );
};


const AdminProducts = () => {


    const products = useLoaderData();
    console.log('Product:', products);

    return (
        <div className="flex flex-col sm:flex-row ">
            <div className="w-full">
                <div className="p-4 sm:p-8 md:p-10 bg-white rounded shadow-xl">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl text-black font-medium">Product List</h2>
                        <div className="card-actions">
                            <a href="/adminproduct/adminaddproduct" className="shadow-2xl btn btn-primary text-sm font-semibold rounded px-4 sm:px-7">Upload Product</a>
                        </div>
                    </div>
                    <div className="py-6 grid grid-cols-1 gap-4 md:py-8 sm:py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
                        {products.map(product => (
                            <AdminProduct key={product._id} product={product}></AdminProduct>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminProducts;