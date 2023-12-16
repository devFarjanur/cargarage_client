import AdminFooter from "../Shared/Admin/AdminFooter";
import AdminNavbar from "../Shared/Admin/AdminNavbar";
import AdminProducts from "../Shared/Admin/AdminProducts";


const AdminMainProduct = () => {
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <AdminProducts></AdminProducts>
            <AdminFooter></AdminFooter>
        </div>
    );
};

export default AdminMainProduct;