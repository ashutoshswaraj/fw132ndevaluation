import { Route,Routes } from "react-router-dom"
import {Home} from "../components/Home"
import { About } from "../components/About";
import { Products } from "../components/ProductsDashboard";
export const MainRoutes = ()=>{
    return (
      <>
        <Routes>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/Product" element={<Products></Products>} />
        </Routes>
      </>
    );
}