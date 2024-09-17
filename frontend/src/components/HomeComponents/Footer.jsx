import rs from "../../assets/banners/rs.jpg";
import cd from "../../assets/banners/cd.jpg";
import lh from "../../assets/banners/lh.jpg";
import fb from "../../assets/social/fb.png";
import telegram from "../../assets/social/T.jpeg";
import yt from "../../assets/social/yt.jpeg";
import whatsapp from "../../assets/social/whatsapp.jpeg";
import Insta from "../../assets/social/insta.png";
import X from "../../assets/social/X.png";
import Visitors from "../HomeComponents/Visitors"


import Pdf1 from "./pdf1";
import Pdf2 from "./pdf2";

export default function Footer() {
  return (
    <footer className="bg-orange-400 text-primary-foreground py-8 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">
            Our Social Support Activities
          </h2>
          <img src={rs} alt="rs" className="w-[390px] h-[90px] mb-2" />
          <img src={cd} alt="cd" className="w-[3900px] h-[90px] mb-2" />
          <img src={lh} alt="lh" className="w-[390px] h-[90px] mb-2" />
          
        </div>
        <div className="">
          <h2 className="text-lg font-bold mb-4 ">Quick Links</h2>
          <ul className="text-base font-bold">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/Gallery" className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/Founder" className="hover:underline">
                Founder Desk
              </a>
            </li>
            <li>
              <a href="/Business_Promotions" className="hover:underline">
              Business Promotions
              </a>
            </li>
            <li>
              <a href="/Servey" className="hover:underline">
               Online Servey
              </a>
            </li>
            <li><Visitors/></li>
          </ul>
          
        </div>

        <div>
          <h2 className="text-base font-bold mb-3">
            Your any Suggestion/Query please Connect with Us
          </h2>
          <p className="text-lg font-semibold">
            Vishwakarma International Federation &reg;
          </p>
          <p className="text-lg font-semibold">
            Plot No.72, Gali No.2, Sunita Vihar
          </p>
          <p className="text-lg font-semibold">
            Loni, Ghaziabad(201102), Uttar Pradesh, India
          </p>
          
          <p className="text-base font-semibold ">
            Email: vishwakarmavansajfederation@gmail.com
          </p>
          <p className="text-lg font-semibold">Contact: +91-8860430007    +91-9625785431</p>
          <br />

          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.facebook.com/vishwakarmavansaj.ektamahasabha?mibextid=ZbWKwL"
              className="p-2 rounded-full  hover:bg-blue-600 transition duration-300 shadow-lg"
              undefinedlabel="Follow on Facebook"
              target="_blank"
            >
              <img className="h-8 w-8" src={fb} alt="Facebook Logo"></img>
            </a>
            <a
              href="https://www.instagram.com/vishwakarmavansajintfederation?igsh=NW42NnRyN2hmcWQz"
              className="p-2 rounded-full hover:bg-pink-600 transition duration-300 shadow-lg"
              target="_blank"
              undefinedlabel="Follow on Instagram"
            >
              <img className="h-8 w-8" src={Insta} alt="Instagram Logo"></img>
            </a>
            <a
              href="https://youtube.com/@vishwakarmavansajinternati3557?si=WUBU-8qGBicrmibJ"
              className="p-2 rounded-full hover:bg-red-600 transition duration-300 shadow-lg"
              target="_blank"
              undefinedlabel="Follow on YouTube"
            >
              <img className="h-8 w-8" src={yt} alt="YouTube Logo"></img>
            </a>
            <a
              href="https://wa.me/message/PJD3ZSEUL5BAK1"
              className="p-2 rounded-full hover:bg-green-600 transition duration-300 shadow-lg"
              undefinedlabel="Follow on Instagram"
              target="_blank"
            >
              <img className="h-8 w-8" src={whatsapp} alt="whatsapp Logo"></img>
            </a>
            <a
              href="https://t.me/AjaySharma2901"
              className="p-2 rounded-full hover:bg-blue-500 transition duration-300 shadow-lg"
              undefinedlabel="Follow on Telegram"
              target="_blank"
            >
              <img className="h-8 w-8" src={telegram} alt="x Logo"></img>
            </a>
            <a
              href="https://x.com/VishwakarmaFed?t=hpbhnNWsIdnRtz9bc-n4cw&s=09"
              className="p-2 rounded-full hover:bg-black transition duration-300 shadow-lg"
              undefinedlabel="Follow on X"
              target="_blank"
            >
              <img className="h-8 w-8" src={X} alt="x Logo"></img>
            </a>
          </div>
          <br />

          <div>
            <Pdf1 /> <Pdf2 />
          </div>
        </div>
      </div>
      <div className="bg-primary/90 text-primary-foreground text-black  my-1 py-2 text-center">
        <p className="text-lg font-bold">
          {" "}
          All rights reserved for VVIF &copy; 2024 designed by <a href="/Contact-Developer" className="text-white">Khushi Sharma</a>
        </p>
      </div>
    </footer>
  );
}
