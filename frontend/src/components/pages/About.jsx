import React from "react";
import Logo from "../../assets/logo.jpg";
import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";
import Mission from "../HomeComponents/Missions";

const About = () => {
  return (
    <div>
      <Header />

      <div className="bg-background text-red-500 min-h-screen flex flex-col items-center justify-center ">
        <div className="max-w-fit p-8 bg-card rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-accent ">About Our NGO</h1>
          <p className="text-lg text-secondary mb-6">
            प्यारे मित्रों, आज हम २१वीं सदीं में अपना पदार्पण कर चुके है, लेकिन
            हमारा समाज आज भी १९वीं सदीं में जी रहा है। समाज में इस नयी सदी कि
            नयी उर्जा का संचार करने के लिए, हमें नये उर्जावान नेतृत्व की
            आवश्यकता है। आज देश की आबादी का ७० प्रतिशत युवा वर्ग है, ऐसी स्थिती
            मे युवाओं को समझने के लिए, समाज कि बागडोर युवाओ के हाथो मे होनी
            चाहिये, चाहे वो देश के किसी भी समाज, घराने या खानदान से हो। समाज की
            प्रगति को बढावा देने में युवा वर्ग का जोश का उपयोग हो सकता है, लेकिन
            निगरानी अगर वरिष्ट बुद्धिजीवियो द्वारा की जाए तो एक सुदृढ़ समाज का
            निर्माण हो सकता है, और ये दोनों के तालमेल से समाज की की गाड़ी समय के
            साथ साथ हमेशा आगे चलती रहेगी। यह बुरा मानने कि बात नही है, लेकिन यह
            एक सच्चाई है कि, आज विभिन्न प्रकार के समाजो में, संस्थाओं में,
            संगठनों में, सभी का नेतृत्व ५५ से ७५ वर्ष तक के लोग ही कर रहे हैं।
            उन्हे आज भी ऐसा लगता गई वो समाज को चला सकते हैं, और ये कुछ हद तक सही
            भी है, लेकिन उम्र के इस पडा़व मे भी उन्हे यह नही लगता है कि, उन्हे
            अब नेतृत्व कि गद्धी को छोड़ देना चाहिए और युवा पीढी़ को बागडोर सौंप
            कर उन्हें आगे लाना चाहिए, ताकि वो अपनी उर्जा और जोश का उपयोग समाज की
            विकास गति को और आगे बढ़ने में कर सकें। समाज के विकास को और आगे बढाने
            के लिए, समाज के युवा पीढी़ के उच्च शिक्षित व आत्मनिर्भर लोगों को आगे
            लाने की आवश्यकता है, क्योकि जो स्वयं आत्मनिर्भर होगा, वही एक
            आत्मनिर्भर समाज का निर्माण कर सकेगा। आत्मनिर्भर व्यक्ति ही समाज का
            दिशा निर्देशन कर सकता है, क्योंकि वह हर रोज अपने आपको सफल बनाने के
            प्रयास को बखूबी अंजाम दे सकता है। हम इतने समझदार, बुद्धिमान और साधन
            सम्पन्न होने के बावजूद हम अगर समाज को कुछ नही दे सकते तो, हमारा इस
            समाज में पैदा होना ही व्यर्थ है, क्योंकि हमे यह कभी नही भुलना चाहिये
            कि, समाज मे पैदा होने से लेकर मरने तक और अन्तिम यात्रा के वक्त हमने
            समाज से बहुत कुछ पाया, इसलिए हमे यह सोचना चाहिये की समाज को हमने
            क्या दिया है?
          </p>

          <div className="p-2 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-4xl font-bold mb-2 text-red-500">
              Our Mission
            </h2>
            <p className="text-base text-secondary mb-4">
              <Mission />
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-4xl font-bold mb-2 text-red-500 mb-4">
              Our Inspiration
            </h2>
            <p className="text-lg text-secondary mb-4">
              हमारी सभी पहलें विश्वकर्मा भगवान की दिव्य प्रेरणा से संचालित होती
              हैं। हम मानते हैं कि सृजन, समर्पण, और सेवा के मार्ग पर चलते हुए हम
              समाज को एक बेहतर स्थान बना सकते हैं। हम चाहते हैं कि लोग अपनी
              रचनात्मकता और क्षमता का उपयोग समाज की भलाई के लिए करें, और साथ
              मिलकर एक समृद्ध, समर्पित और सौहार्दपूर्ण दुनिया का निर्माण करें।
              हम आपको आमंत्रित करते हैं कि आप भी हमारे साथ इस दिव्य यात्रा में
              शामिल हों। आइए, हम मिलकर समाज में परिवर्तन लाएं और विश्वकर्मा
              भगवान की शिक्षाओं के अनुसार एक बेहतर भविष्य का निर्माण करें।
            </p>
          </div>

          {/* <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2 text-accent">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="https://openui.fly.dev/openui/150x150.svg?text=Team"
                  alt="Team Member"
                  className="rounded-full mb-2 border-4 border-accent"
                ></img>
                <h3 className="text-lg font-bold text-primary">John Doe</h3>
                <p className="text-sm text-secondary">Founder & CEO</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="https://openui.fly.dev/openui/150x150.svg?text=Team"
                  alt="Team Member"
                  className="rounded-full mb-2 border-4 border-accent"
                ></img>
                <h3 className="text-lg font-bold text-primary">Jane Smith</h3>
                <p className="text-sm text-secondary">Head of Operations</p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
                <img
                  src="https://openui.fly.dev/openui/150x150.svg?text=Team"
                  alt="Team Member"
                  className="rounded-full mb-2 border-4 border-accent"
                ></img>
                <h3 className="text-lg font-bold text-primary">Alex Johnson</h3>
                <p className="text-sm text-secondary">Community Manager</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
