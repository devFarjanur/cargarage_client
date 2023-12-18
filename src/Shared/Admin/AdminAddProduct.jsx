

import Swal from "sweetalert2";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";

const AdminAddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();


        const form = event.target;

        const productId = form.productId.value;
        const productImage = form.productImage.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const productDescription = form.productDescription.value;


        const addProduct = { productId, productImage, productName, productPrice, productDescription };


        console.log(addProduct);

        // send data to server

        fetch('https://cargarage.onrender.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // Delay for * seconds before reloading the website
                    setTimeout(() => {
                        window.location.reload();
                    }, 4000); // Adjust the delay time as needed
                }
            })


    }

    // products image

    // https://i.ibb.co/ZYqsWg7/1.png  Car Break
    // https://i.ibb.co/L6DMVSw/2.png  Car Break
    // https://i.ibb.co/VWvJrKW/3.png  Engine Cooler
    // https://i.ibb.co/XJPDkh9/4.png  Car Battery
    // https://i.ibb.co/Xp4Lymc/5.png  Car Tier
    // https://i.ibb.co/mh5VSrt/6.png  Car Engine Plug


    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div className='px-14 py-12'>
                <div className="bg-slate-300 drop-shadow-2xl rounded">
                    <div className="w-full mx-auto px-24 pb-24">
                        <div>
                            <h2 className='text-black text-2xl text-center py-10 font-semibold'>Upload Product</h2>
                        </div>

                        <form className="mt-4 " onSubmit={handleAddProduct}>
                            <div className="mb-6 grid grid-cols-2 gap-x-6"> {/* Add the 'grid' class and specify the gap */}
                                <div>
                                    <input
                                        type="text"
                                        name="productId"
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Product Id"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="productImage"
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Product Image"
                                    />
                                </div>
                            </div>

                            <div className="mb-6 grid grid-cols-2 gap-x-6"> {/* Add the 'grid' class and specify the gap */}
                                <div>
                                    <input
                                        type="text"
                                        name="productName"
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Product Name"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="productPrice"
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Product Price"
                                    />
                                </div>
                            </div>

                            {/* Textarea */}
                            <div className="mb-6">
                                <textarea
                                    id="message"
                                    name="productDescription"
                                    className="w-full h-[250px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                    rows="4"
                                    placeholder="Product Description"
                                />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full h-[64px] bg-[#FF3811] hover:bg-[#FF3811] text-white text-xl font-semibold py-2 px-4 rounded-lg">
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <AdminFooter></AdminFooter>
        </div>
    );
};

export default AdminAddProduct;