import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/navigation/NavBar";

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
    </Routes>
  );
};

export default CustomRoutes;
