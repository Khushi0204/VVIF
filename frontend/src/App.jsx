import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Gallery from "./components/pages/Gallery";
import Founder from "./components/pages/Founder";
import Servey from "./components/pages/Servey";
import DonateNow from "./components/pages/DonateNow";
import DonationForm from "./components/pages/DonationForm";
import Developer from "./components/pages/Developer"



import Promotions from "./components/pages/Promotions";
import Dashboard from "./components/pages/Dashboard";
import Membership from "./components/pages/Membership";
import Testimonial from "./components/pages/Testimonial";
import PrabhuMahima from "./components/pages/PrabhuMahima";
import Transaction from "./components/Generate/transaction";
import { Auth0Provider } from "@auth0/auth0-react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/pages/Register";
// import Certificate from "./components/Generate/Certificate";

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
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Business_Promotions",
      element: <Promotions />,
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
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/Membership",
      element: <Membership />,
    },
    {
      path: "/transaction",
      element: <Transaction />,
    },
  
    {
      path: "/DonationForm",
      element: <DonationForm />,
    },
    {
      path: "/DonateNow",
      element: <DonateNow />,
    },
    {
      path: "/Contact-Developer",
      element: <Developer />,
    }
  
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
