
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Navbar.css'



const Navbar = () => {
    const navItems = (
        <>
            <li className=''><Link to="/">Home</Link></li>
            <li className='ml-10'><Link to="/service">Services</Link></li>
            <li className='ml-10'><Link to="/product">Products</Link></li>
            <li className='ml-10'><Link to="/contact">Contact</Link></li>
        </>
    );

    return (
        <div className='max-w-7xl mx-auto mt-3.5'>
            <div className="navbar bg-white text-black text-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-white menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 text-lg font-semibold">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className='h-12 w-24' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 text-lg font-semibold">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn bg-white text-lg hover:bg-white">
                        Log in
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
