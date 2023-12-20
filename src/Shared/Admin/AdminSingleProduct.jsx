import { useLoaderData } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";


const AdminSingleProduct = () => {
    const products = useLoaderData();

    const { _id, productImage, productName, productPrice } = products;

    return (
        <div>
            <AdminNavbar></AdminNavbar>

            <div className="max-w-screen-2xl">
                <div className="h-[600px] grid grid-cols-2 bg-white rounded-lg shadow-2xl my-10">
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
                        <button className="mt-4 btn btn-primary hover:scale-105">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>




            <AdminFooter></AdminFooter>
        </div>
    );
};

export default AdminSingleProduct;