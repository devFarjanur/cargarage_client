import { useState } from 'react';
import AdminNavbar from '../../Shared/AdminNavbar/AdminNavbar';

const AdminAddProduct = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to a server or perform client-side actions.
    };

    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div className=''>
                <div className="bg-slate-300 drop-shadow-md">
                    <div className="w-full mx-auto px-24 pb-24">
                    <div>
                        <h2 className='text-black text-2xl text-center py-10 font-semibold'>Upload Product</h2>
                    </div>

                        <form className="mt-4 " onSubmit={handleSubmit}>
                            <div className="mb-6 grid grid-cols-2 gap-x-6"> {/* Add the 'grid' class and specify the gap */}
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Product Id"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Product Image"
                                    />
                                </div>
                            </div>

                            <div className="mb-6 grid grid-cols-2 gap-x-6"> {/* Add the 'grid' class and specify the gap */}
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Product Name"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Product Price"
                                    />
                                </div>
                            </div>

                            {/* Textarea */}
                            <div className="mb-6">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
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
        </div>
    );
};

export default AdminAddProduct;