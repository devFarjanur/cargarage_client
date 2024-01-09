
const Cart = ({ cart, removeFromCart }) => {
  // Check if cart is undefined or empty
  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cart.map((item) => (
          <div key={item._id} className="card bg-white shadow-2xl">
            <figure className="px-6 pt-6">
              <img src={item.productImage} alt={item.productName} className="rounded-xl w-[200px] h-[200px] object-cover border-2 object-cover" />
            </figure>
            <div className="card-body items-center text-center p-6">
              <h2 className="text-black text-xl font-semibold">{item.productName}</h2>
              <p className="text-black text-lg font-semibold">{item.productPrice}</p>
              <div className="card-actions mt-4">
                <button onClick={() => removeFromCart(item._id)} className="btn btn-secondary">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
