import Sidebar from "./sidebar";
import AdminPost from "./adminproducts";
import "../new.css";
import ErrorPage from "../images/errorpage.jpg";
function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <>
      {" "}
      {user ? (
        <div className="admin-container">
          <Sidebar />
          <AdminPost />
        </div>
      ) : (
        <>
          <div className="error-page-image">
            <img
              src={ErrorPage}
              alt="errorpage"
              className="error-page-image-style"
            />
          </div>
        </>
      )}{" "}
    </>
  );
}

export default Admin;
