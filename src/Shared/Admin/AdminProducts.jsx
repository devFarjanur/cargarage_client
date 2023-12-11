
import { Link, useLoaderData } from "react-router-dom";


const AdminProduct = (props) => {

    const { productImage, productName, productPrice } = props.product;


    return (
        <div>
            <div className="card w-[400px] h-[400px] bg-white shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={productImage} alt="" className="rounded-xl w-[220px] h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-black text-xl font-semibold">{productName}</h2>
                    <p className="text-black text-lg font-semibold">{productPrice}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Product Details</button>
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
        <div>
            <div className="px-14 py-12">
                <div className="px-14 py-14 bg-white rounded drop-shadow-xl">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl text-black font-medium">Product List</h2>
                        <div className="card-actions">
                            <Link to="/adminproduct/adminaddproduct" className="shadow-2xl btn btn-primary text-sm font-semibold rounded px-7">Upload Product</Link>
                        </div>
                    </div>
                    <div className="py-14 px-8 grid grid-cols-3 gap-8">
                        {
                            products.map(product => (
                                <AdminProduct key={product._id} product={product}></AdminProduct>
                            ))
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AdminProducts;