import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo2 from "../../assets/logo2.png"; // Tell webpack this JS file uses this image
import b from "../../assets/vbp.jpg"; // Tell webpack this JS file uses this image
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../pages/Login";


// console.log(logo); // /logo.84287d09.png

function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
  return (
    <div>
      
      <div
        style={{ borderRadius: "15px" }}
        className="m-0 p-0  bg-orange-400 rounded-lg shadow-lg h-10"
      >
        <Navbar
          style={{ borderRadius: "15px" }}
          data-bs-theme="dark"
          className="m-0 p-0 float-right"
        >
          <Container className=" float-end">
            <Nav >
              {/* {
                isAuthenticated && (
                  <div  className=" w-[400px] flex m-0 items-start justify-center  " >

                    <img src={user.picture} alt={user.name} className="h-8 w-7 block my-auto"/>
                    <h2 className="block w-fit my-auto ml-1">welcome, <a href="/Dashboard">{user.name}</a></h2>
                  </div>
                )
              }
              {isAuthenticated ? (
                <Nav.Link
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className=" font-bold px-3 "
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => loginWithRedirect()}
                  className=" font-bold px-3"
                >
                  Login/Sign up
                </Nav.Link>
              )} */}
              <Nav.Link href="/Login" className="font-bold px-3">
              Login/SignUp
            </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* // Import result is the URL of your image */}
      {/* <img src={logo} alt="Logo" className='w-[50%] h-28 mx-auto' /> */}
      <div className="flex justify items-center my-4">
        <img
          src={Logo2}
          alt="Logo"
          className="h-40 w-40 ml-20"
          crossorigin="anonymous"
        ></img>
        <div className="text-4xl font-bold  inline-block mx-4">
          <div className="text-5xl text-red-600 w-fit mx-auto">
            विश्वकर्मा वंसज इंटरनेशनल फेडरेशन{" "}
          </div>
          <div className="text-red-600 w-fit ml-auto">
            Vishwakarma Vansaj International Federation{" "}
          </div>
          <p className="text-base text-muted-foreground   text-blue-800 w-fit mx-auto font-extrabold">
            Registered: Under Section 8(1) (Ministry of Corporate Affairs, Govt.
            of India)
          </p>
          <p className="text-base font-extrabold text-muted-foreground  text-blue-800 w-fit mx-auto">
            Registered: Niti Aayog (Govt. of India); An ISO certified 9001: 2015
            Org.
          </p>
          <p className=" text-blue-900 text-xl  font-extrabold w-fit mx-auto">
            एक सामाजिक एवं धार्मिक अंतरराष्ट्रीय संस्था
          </p>
        </div>
        <img src={b} alt="Logo" className="w-[10%] h-[10%] ml-4" />
        {/* <img src={bbbp} alt="Logo" className="w-[90px] h-[90px] ml-4" /> */}
      </div>

      <Navbar
        style={{ borderRadius: "15px" }}
        bg="success"
        data-bs-theme="dark"
        className="m-0 p-0"
      >
        <Container>
          <Nav className="mx-auto ">
            <Nav.Link href="/" className=" font-bold px-3">
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
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
