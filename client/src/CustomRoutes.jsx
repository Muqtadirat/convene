import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/navigation/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// const Layout = ({ children }) => {
//   return(
//   <>
//       <NavBar />
//       <Homepage />
//   </>)
// }

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

      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
  );
};

export default CustomRoutes;
