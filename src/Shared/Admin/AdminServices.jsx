import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AdminService = (props) => {

    const { _id, serviceImage, serviceName, servicePrice } = props.service;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://cargarage.onrender.com/service/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Prooduct has been deleted.",
                                icon: "success"
                            });
                            // Delay for 2 seconds before reloading the website
                            setTimeout(() => {
                                window.location.reload();
                            }, 4000); // Adjust the delay time as needed
                        }
                    })


            }
        });
    }

    return (

        <div className="w-[260px] md:w-[300px] lg:w-[275px] xl:w-[265px] mx-auto">
            <div className="card w-full bg-white shadow-2xl">
                <figure className="px-6 pt-6">
                    <img src={serviceImage} alt="" className="rounded-xl w-[200px] h-[200px] object-cover" />
                </figure>
                <div className="card-body items-center text-center p-6">
                    <h2 className="text-black text-xl font-semibold">{serviceName}</h2>
                    <p className="text-black text-lg font-semibold">{servicePrice}</p>
                    <div className="card-actions mt-4">
                        <Link to>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                        <button

                            onClick={() => handleDelete(_id)}
                            className="btn btn-primary">Delete

                        </button>

                    </div>
                </div>
            </div>
        </div>


    );
};

const AdminServices = () => {

    const services = useLoaderData();

    return (
        <div>
            <div className="flex flex-col sm:flex-row ">
                <div className="w-full">
                    <div className="p-4 sm:p-8 md:p-10 bg-white rounded shadow-xl">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl text-black font-medium">Service List</h2>
                            <div className="card-actions">
                                <a href="/adminservice/adminaddservice" className="shadow-2xl btn btn-primary text-sm font-semibold rounded px-4 sm:px-7">Upload Service</a>
                            </div>
                        </div>
                        <div className="py-6 grid grid-cols-1 gap-4 md:py-8 sm:py-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {services.map(service => (
                                <AdminService key={service._id} service={service}></AdminService>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminServices;