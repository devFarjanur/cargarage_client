import logo from '../../assets/logo.svg';

const AdminFooter = () => {
    return (
        <div>
            <footer className="footer py-28 px-32 bg-black text-base-content text-white">
                <aside>
                    <img className='h-14 w-14' src={logo} alt="" />
                    <p className='text-base font-normal'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="text-xl">Services</header>
                    <a className="link link-hover text-base">Branding</a>
                    <a className="link link-hover text-base">Design</a>
                    <a className="link link-hover text-base">Marketing</a>
                    <a className="link link-hover text-base">Advertisement</a>
                </nav>
                <nav>
                    <header className="text-xl">Company</header>
                    <a className="link link-hover text-base">About us</a>
                    <a className="link link-hover text-base">Contact</a>
                    <a className="link link-hover text-base">Jobs</a>
                    <a className="link link-hover text-base">Press kit</a>
                </nav>
                <nav>
                    <header className="text-xl">Legal</header>
                    <a className="link link-hover text-base">Terms of use</a>
                    <a className="link link-hover text-base">Privacy policy</a>
                    <a className="link link-hover text-base">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default AdminFooter;