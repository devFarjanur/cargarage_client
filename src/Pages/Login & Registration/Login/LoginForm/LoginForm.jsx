import img from "../../../../assets/images/login/login.svg"

const LoginForm = () => {
    return (
        <div className="px-40">
            <div className="grid grid-cols-2 gap-x-6">
                <div className="bg-white flex items-center justify-center">
                    <img src={img} alt="Album" className="mx-auto w-[460px] h-[500px]" />
                </div>
                <div className="border-2 border-black w-[611px] h-[782px] mt-20 px-20 bg-white rounded shadow-md">
                    <h2 className="text-4xl font-semibold px-48 pt-20 pb-8">Login</h2>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="username" className="text-[#444] text-lg font-medium mb-5">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Enter your username"

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
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="px-20px mt-7">
                            <button
                                type="submit"
                                className="w-[461px] h-[64px] bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LoginForm;