import AdminFooter from "../Shared/Admin/AdminFooter";
import AdminNavbar from "../Shared/Admin/AdminNavbar";
import AdminServices from "../Shared/Admin/AdminServices";

const AdminMainService = () => {
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <AdminServices></AdminServices>
            <AdminFooter></AdminFooter>
        </div>
    );
};

export default AdminMainService;