import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Gallery from "./components/pages/Gallery";
import Founder from "./components/pages/Founder";
import Servey from "./components/pages/Servey";
import Testimonial from "./components/pages/Testimonial";
import PrabhuMahima from "./components/pages/PrabhuMahima";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/pages/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/PrabhuMahima",
      element: <PrabhuMahima />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Gallery",
      element: <Gallery />,
    },
    {
      path: "/Founder",
      element: <Founder />,
    },
    {
      path: "/Servey",
      element: <Servey />,
    },
    {
      path: "/Testimonial",
      element: <Testimonial />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
