import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/navigation/NavBar";
import SideBar from "./components/navigation/SideBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Homepage />
          </>
        }
      />

      <Route
        path="/admindashboard"
        element={
          <Layout>
            <AdminDashboard />
          </Layout>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default CustomRoutes;
