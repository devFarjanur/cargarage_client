import Navbar from "../Shared/Navbar";
import ProductCart from "../Shared/Cart/ProductCart";
import Footer from "../Shared/Footer";
import { useState } from "react";


const ProductMainCart = (products) => {

    const [localCart, setLocalCart] = useState([5]);

    const removeFromCart = (_id) => {
        const updatedCart = localCart.filter((item) => item._id !== _id);
        setLocalCart(updatedCart);
    };

    const uniqueProductCount = Array.from(new Set(localCart.map(item => item._id))).length;

    return (
        <div>

            <Navbar></Navbar>
            <ProductCart cart={localCart} removeFromCart={removeFromCart}></ProductCart>
            <Footer></Footer>
            
        </div>
    );
};

export default ProductMainCart;