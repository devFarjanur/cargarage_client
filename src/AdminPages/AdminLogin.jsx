import { Link } from "react-router-dom";

const AdminLogin = () => {
    return (
        <div className="py-20">
            <div>
                <div className="pr-10 border-[1px] border-[#D0D0D0] w-[611px] h-[600px] mx-auto px-20 bg-white rounded shadow-md">
                    <h2 className="text-4xl font-semibold text-center pt-20 pb-8 text-black">Admin Login</h2>
                    <form className="my-4">
                        <div className="mb-4">
                            <label htmlFor="username" className="text-[#444] text-lg font-medium mb-5">
                                Username
                            </label>
                            <input
                                type="username"
                                id="username"
                                name="username"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Admin username"

                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="text-[#444] text-lg font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Admin password"
                            />
                        </div>
                        <div className="px-20px mt-7">
                            <Link
                                to="/adminproduct"
                                className="block w-[461px] h-[64px] bg-[#FF3811] hover:bg-[#FF3811] text-white text-xl font-semibold rounded-md text-center py-3"
                            >
                                Log In
                            </Link>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AdminLogin;