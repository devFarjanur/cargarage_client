import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import ProductsBanner from "../Shared/Product/ProductsBanner";
import { useEffect, useState } from "react";
import ProductCart from "../Shared/Cart/ProductCart";
import Modal from "react-modal";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

const Product = ({ product, onAddToCart }) => {
    const { _id, productImage, productName, productPrice } = product;

    return (
        <div className="w-[290px] md:w-[345px] lg:w-[305px] xl:w-[285px] 2xl:w-[310px] mx-auto">
            <div className="card w-full bg-white shadow-2xl">
                <figure className="px-6 pt-6">
                    <img src={productImage} alt="" className="rounded-xl w-[200px] h-[200px] object-cover border-2 object-cover" />
                </figure>
                <div className="card-body items-center text-center p-6">
                    <h2 className="text-black text-xl font-semibold">{productName}</h2>
                    <p className="text-black text-lg font-semibold">{productPrice}</p>
                    <div className="card-actions mt-4">
                        <button onClick={() => onAddToCart(_id)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(() => {
        // Load cart from localStorage on component mount
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });


    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    useEffect(() => {
        // Save cart to localStorage whenever it changes
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (_id) => {
        console.log('Adding to cart:', _id);

        const isProductInCart = cart.some((item) => item._id === _id);

        if (!isProductInCart) {
            const selectedProduct = products.find((product) => product._id === _id);

            if (selectedProduct) {
                setCart([...cart, selectedProduct]);
            }
        } else {
            console.log("Product already in cart");
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item._id !== productId);
        setCart(updatedCart);
    };

    const openCartModal = () => {
        setIsCartModalOpen(true);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    return (
        <div>
            <Navbar />
            <ProductsBanner />
            <div className="max-w-screen-xl mx-auto my-8">
                <div className="py-6 grid grid-cols-1 gap-4 md:py-8 sm:py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map(product => (
                        <Product key={product._id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
                <div>
                    <button onClick={openCartModal}>Open Cart</button>
                    <CSSTransition
                        in={isCartModalOpen}
                        timeout={300}
                        classNames="modal"
                        unmountOnExit
                    >
                        <Modal
                            isOpen={isCartModalOpen}
                            onRequestClose={closeCartModal}
                            contentLabel="Cart Modal"
                        >
                            <ProductCart cart={cart} removeFromCart={removeFromCart}></ProductCart>
                            <button onClick={closeCartModal}>Close Cart</button>
                        </Modal>
                    </CSSTransition>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
