import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home/index";
import Services from "@/pages/Services";
import { createBrowserRouter } from "react-router-dom";

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
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
