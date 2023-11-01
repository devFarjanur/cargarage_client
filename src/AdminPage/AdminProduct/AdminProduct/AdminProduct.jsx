
const AdminProduct = (props) => {

    const { productImage, productName, productPrice } = props.product;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={productImage} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <p>{productPrice}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Product Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProduct;