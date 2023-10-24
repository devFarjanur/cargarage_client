import { useState } from 'react';

const AddServiceForm = () => {
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
            <div className='py-36'>
                <div className="bg-[#F3F3F3] rounded-lg">
                    <div className="w-full mx-auto p-24 rounded">

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
                                        placeholder="Servic Name"
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
                                        placeholder="Service Price"
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
                                        placeholder="Text here"
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
                                        placeholder="Service Type"
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
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServiceForm;