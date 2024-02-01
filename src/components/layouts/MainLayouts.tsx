import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import { MenubarDemo } from "./Demo";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
