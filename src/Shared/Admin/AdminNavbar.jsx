import { Link } from "react-router-dom";

const AdminNavbar = () => {

    const navItems = (

        <>
            <li> <Link to='/adminproduct'>Product</Link></li>
            <li> <Link to='/adminservice'>Service</Link></li>
            <li> <Link to='/adminorder'>Order</Link></li>
            <li> <Link to='/admincustomer'>Customer</Link></li>

        </>

    );

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="navbar bg-white border-[0px] text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-3xl">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;