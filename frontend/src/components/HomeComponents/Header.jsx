import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo2 from "../../assets/logo2.png"; 
import HB from "../../assets/HB.png"; 
import b from "../../assets/vbp.jpg"; 
import { useAuth0 } from "@auth0/auth0-react";

// Responsive Header Component
function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      {/* Top Navbar for Login/Signup */}
      <div className="bg-orange-400 rounded-lg shadow-lg h-10">
        <Navbar expand="lg" data-bs-theme="dark" className="p-0">
          <Container className="justify-end">
            {/* <Nav>
              <Nav.Link href="/Login" className="font-bold px-3">
                Login/SignUp
              </Nav.Link>
            </Nav> */}
          </Container>
        </Navbar>
      </div>

      {/* Logo and Title */}
      
      <div className="flex flex-row md:flex-row items-center justify-center my-2">
      {/* <img
          src={Logo2}
          alt="Logo"
          className="h-[100px] w-100%  md:h-[300px]  md:w-100% md:mx-0 mb-0"
          crossOrigin="anonymous"
        /> */}



        <img
          src={Logo2}
          alt="Logo"
          className="h-20 w-20  md:h-28  md:w-28 lg:h-40  lg:w-40 md:mx-0 mb-0 mr-2"
          crossOrigin="anonymous"
        />
        <div className="text-center md:text-left md:mx-4 mt-4 md:mt-0">
          <h1 className="text-l md:text-3xl lg:text-5xl text-red-600 font-bold">
            विश्वकर्मा वंसज इंटरनेशनल फेडरेशन
          </h1>
          <h2 className="text-red-600 text-[12px] font-bold md:text-xl lg:text-2xl">
            Vishwakarma Vansaj International Federation
          </h2>
          <p className=" text-blue-800 font-extrabold text-[4px] md:text-sm lg:text-base mb-1">
            Registered: Under Section 8(1) (Ministry of Corporate Affairs, Govt. of India)
          </p>
          <p className="md:text-sm lg:text-base text-blue-800 font-extrabold text-[4px] mb-1">
            Registered: Niti Aayog (Govt. of India); An ISO certified 9001: 2015 Org.
          </p>
          <p className="text-[12px] text-blue-900 font-extrabold md:text-lg">
            एक सामाजिक एवं धार्मिक अंतरराष्ट्रीय संस्था
          </p>
        </div>
        <img
          src={b}
          alt="Logo"
          className="w-20 h-20 md:h-28  md:w-28 lg:h-40  lg:w-40 ml-4 mt-0 md:mt-0"
        />
      </div>

      {/* Main Navigation Menu */}
      <Navbar expand="lg" bg="success" variant="dark" className="rounded-lg ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mx-auto">
              <Nav.Link href="/" className="font-bold px-3">
                Home
              </Nav.Link>
              <Nav.Link href="/About" className="font-bold px-3">
                About
              </Nav.Link>
              <Nav.Link href="/PrabhuMahima" className="font-bold px-3">
                Prabhu Mahima
              </Nav.Link>
              <Nav.Link href="/Gallery" className="font-bold px-3">
                Gallery
              </Nav.Link>
              <Nav.Link href="/Contact" className="font-bold px-3">
                Contact Us
              </Nav.Link>
              <Nav.Link href="/Founder" className="font-bold px-3">
                Founder Desk
              </Nav.Link>
              <Nav.Link href="/Business_Promotions" className="font-bold px-3">
                Business Promotions
              </Nav.Link>
              <Nav.Link href="/Testimonial" className="font-bold px-3">
                Testimonial
              </Nav.Link>
              <Nav.Link href="/Servey" className="font-bold px-3">
                Online Survey
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
