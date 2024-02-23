import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import NavBar from "./components/navigation/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./components/profile/Profile";

// const Layout = ({ children }) => {
//   return (
//     <>
//       {/* <SideBar /> */}
//       {/* <AppShell>{children}</AppShell> */}
//       {children}
//     </>
//   );
// };

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
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default CustomRoutes;
