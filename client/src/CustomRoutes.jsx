import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/navigation/NavBar";
// import SideBar from "./components/navigation/SideBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
// import { AppShell } from "@mantine/core";

const Layout = ({ children }) => {
  return (
    <>
      {/* <SideBar /> */}
      {/* <AppShell>{children}</AppShell> */}
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
            {/* <SideBar/> */}
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
