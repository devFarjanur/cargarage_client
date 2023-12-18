import Swal from "sweetalert2";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";

const AdminAddService = () => {

    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;

        const serviceId = form.serviceId.value;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const serviceDescription = form.serviceDescription.value;

        const addService = { serviceId, serviceImage, serviceName, servicePrice, serviceDescription }

        console.log(addService);

        fetch('https://cargarage.onrender.com/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service added successfully',
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

    // service image

    // https://ibb.co/nQMNRqf


    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div className='px-14 py-12'>
                <div className="bg-slate-300 drop-shadow-2xl rounded">
                    <div className="w-full mx-auto px-24 pb-24">
                        <div>
                            <h2 className='text-black text-2xl text-center py-10 font-semibold'>Upload Product</h2>
                        </div>

                        <form className="mt-4 " onSubmit={handleAddService}>
                            <div className="mb-6 grid grid-cols-2 gap-x-6"> {/* Add the 'grid' class and specify the gap */}
                                <div>
                                    <input
                                        type="text"
                                        name="serviceId"
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Service Id"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="serviceImage"
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Service Image"
                                    />
                                </div>
                            </div>

                            <div className="mb-6 grid grid-cols-2 gap-x-6"> {/* Add the 'grid' class and specify the gap */}
                                <div>
                                    <input
                                        type="text"
                                        name="serviceName"
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Service Name"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="servicePrice"
                                        className="w-full h-[60px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                        placeholder="Service Price"
                                    />
                                </div>
                            </div>

                            {/* Textarea */}
                            <div className="mb-6">
                                <textarea
                                    id="message"
                                    name="serviceDescription"
                                    className="w-full h-[250px] bg-white px-6 py-2 text-[#A2A2A2] border-none rounded-lg"
                                    rows="4"
                                    placeholder="Service Description"
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

export default AdminAddService;