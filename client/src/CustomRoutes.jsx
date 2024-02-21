import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/navigation/NavBar";
import Login from "./pages/Login";

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
    </Routes>
  );
};

export default CustomRoutes;
