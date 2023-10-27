import ProductsBanner from "../ProductsBanner/ProductsBanner";
import ProductList from "../ProductList/ProductList";
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";

const ProductsMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductsBanner></ProductsBanner>
            <ProductList></ProductList>
            <Footer></Footer>
        </div>
    );
};

export default ProductsMain;