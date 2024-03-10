import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import Home from "@/pages/Home/index";
import Services from "@/pages/Services";
import AddServices from "@/pages/admin/AddServices";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "add-service",
        element: <AddServices />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
