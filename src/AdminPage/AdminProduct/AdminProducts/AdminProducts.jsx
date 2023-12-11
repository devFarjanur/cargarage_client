import { useEffect, useState } from "react";
import AdminProduct from "../AdminProduct/AdminProduct";
import { Link } from "react-router-dom";
import AdminNavbar from "../../Shared/AdminNavbar/AdminNavbar";

const AdminProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div className="px-14 py-12">
                <div className="px-8 py-8 bg-white rounded drop-shadow-md">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl text-black font-medium">Product List</h2>
                        <div className="card-actions">
                            <Link to="/adminProducts/addProduct" className="btn btn-primary text-sm font-semibold rounded px-7">Upload Product</Link>
                        </div>
                    </div>
                    {Array.isArray(products) ? (
                        products.map(product => (
                            <AdminProduct key={product.id} product={product}></AdminProduct>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;
