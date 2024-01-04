import AdminProductList from "../features/admin/components/AdminProductList";
import NavBar from "../features/navBar/NavBar";

function AdminHome() {
  return (
    <div>
      <NavBar>
        <AdminProductList></AdminProductList>
      </NavBar>
    </div>
  );
}

export default AdminHome;
