import React from "react";
import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer";
import Slider from "../HomeComponents/Slider";
import Slider1 from "../HomeComponents/Slider1";
import vip from "../../assets/vip.jpg";
import map from "../../assets/map.jpeg";
import Mission from "../HomeComponents/Missions"
import "bootstrap/dist/css/bootstrap.min.css";
import Slider2 from "../HomeComponents/Slider2"
import DonateNow from "../pages/DonateNow";


const Home = () => {
  return (
    <>
      <div>
        <Header />

        <main className="bg-background dark:bg-foreground text-dark dark:text-primary-foreground   ">
        <div
  className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 sm:px-6 lg:px-2" // Responsive grid layout
>
  <div className="w-full md:w-auto"> {/* Ensure slider takes up full width on smaller screens */}
    <Slider />
  </div>

  {/* Middle section with slight width adjustment */}
  <div className="md:w-full w-[95%] mx-auto"> {/* Ensure responsiveness by setting width to 95% on smaller screens */}
    <section className="container py-4 w-full bg-card dark:bg-card-foreground rounded-lg p-0 shadow-md">
      <div className="gap-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 text-red-500 text-center">
            विश्वकर्मा वंसज इंटरनेशनल फेडरेशन
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 text-red-500 text-center">
            में आपका स्वागत है
          </h1>
          <p className="text-sm sm:text-base md:text-base text-center font-semibold px-4">
            विश्वकर्मा वंसज इंटरनेशनल फेडरेशन एक सामाजिक एवं धार्मिक
            अंतरराष्ट्रीय संस्था है, जहाँ हम वृद्ध लोगों की मदद, चिकित्सा सहायता,
            क्लस्टर छात्रों के लिए शैक्षिक सहायता, महिला सशक्तिकरण, क्लस्टर क्षेत्र
            में सशक्तिकरण और विकास कार्यक्रम और कई धर्मार्थ सेवाओं पर काम करते हैं।
            हमें मानवता के लिए आपके समर्थन की आवश्यकता है। अपनी सुविधानुसार किसी
            भी राशि का दान करके असहाय लोगों के लिए कुछ करें जो खुद की मदद नहीं कर
            सकते।
          </p>
          <a
            href="/DonateNow"
            className="bg-orange-400 text-accent-foreground hover:bg-green-400 rounded-full px-4 py-2 mt-4 transition-colors duration-300"
          >
            इनकी मदद करें
          </a>
        </div>
      </div>
    </section>
  </div>

  <div className="w-full md:w-auto"> {/* Ensure slider takes up full width on smaller screens */}
    <Slider1 />
  </div>
</div>
 


          <br />
          <Mission/>
          <section className="container mx-auto py-12 h-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div>
                <img
                  src={vip}
                  alt="NGO Team"
                  className="w-full h-68 rounded-lg shadow-lg"
                />
              </div>
              <div><img
                  src={map}
                  alt="NGO Team"
                  className="w-full h-[434px] rounded-lg shadow-lg"
                /></div>
            </div>
          </section>
        </main>
            
            <Slider2/>
            
        <Footer />
        
      </div>
    </>
  );
};

export default Home;
