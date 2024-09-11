import kausal from "../../assets/kausal.jpg";
import poverty from "../../assets/poverty.jpeg";
import health from "../../assets/health.jpg";
import disaster from "../../assets/disaster.jpeg";
import child from "../../assets/child.jpeg";
import DonateNow from "../pages/DonateNow"
import CL from "../../assets/CL.jpeg";
import edu from "../../assets/education.jpg";
import we from "../../assets/WE1.jpeg";
import j from "../../assets/Justice.jpg";
import bbbp from "../../assets/bbbp.jpeg"
import rb from "../../assets/rb.jpeg"
import chasma from "../../assets/chasma.png"

import React from 'react'

const Missions = () => {
  return (
    <div>
      <section className=" dark:bg-secondary-foreground rounded-lg shadow-lg py-12 bg-orange-200">
            <div className="container mx-auto ">
              <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: 20,
            }}>
              <div className="w-fit "><img src={chasma} alt="Logo" className="w-[90px] h-[90px] ml-4" /></div>
              <div className="w-[1000px]"><h2 className="text-2xl md:text-4xl font-bold text-center mb-8 w-auto container ">
              विश्वकर्मा वंशज इंटरनेशनल फेडरेशन के सामाजिक कार्य
              </h2></div>
              <div><img src={bbbp} alt="Logo" className="w-[90px] h-[90px] ml-4" /></div>
              </div>
              <div className="gap-8  flex">
                <div className=" w-1/3 bg-card dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={edu}
                    alt="Project 1"
                    className=" h-70 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    बच्चों की शिक्षा
                  </h3>
                  <p className="text-sm leading-relaxed">
                    हमारा उद्देश्य है कि हर बच्चा शिक्षा का अधिकार प्राप्त करे।
                    हमारी संस्था वंचित और आर्थिक रूप से कमजोर बच्चों को निःशुल्क
                    शिक्षा प्रदान करने के लिए विशेष परियोजनाएं चला रही है। इन
                    परियोजनाओं के माध्यम से हम बच्चों को न केवल बुनियादी शिक्षा
                    देते हैं, बल्कि उनकी स्किल्स को विकसित करने और उन्हें
                    आत्मनिर्भर बनाने की दिशा में भी कार्य करते हैं। हमारा मानना
                    है कि शिक्षा ही वह आधार है जो बच्चों के भविष्य को संवार सकता
                    है।
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 text-accent-foreground hover:bg-accent/80 rounded-full px-6 py-3 mt-16 inline-block transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
                <div className="w-1/3 bg-card dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={we}
                    alt="Project 2"
                    className=" h-70 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    महिला सशक्तिकरण
                  </h3>
                  <p className="text-sm leading-relaxed">
                    आधुनिक समाज में आत्मरक्षा का महत्व - आपको खुद की सुरक्षा
                    क्यों करनी चाहिए जीवन एक उपहार है। यह अप्रत्याशित भी है।
                    आत्मरक्षा आपको अप्रत्याशित परिस्थितियों के लिए तैयार करने
                    में मदद करती है और मानसिक और शारीरिक स्वास्थ्य को बेहतर
                    बनाने में भी मदद करती है। सक्रिय रहें और आज ही MKV कराटे
                    अकादमी दिल्ली NCR में आत्मरक्षा कक्षा शुरू करें। किसी अजनबी
                    द्वारा हमला किए जाने की कल्पना करना कठिन हो सकता है, लेकिन
                    ऐसा हर दिन होता है। ये हमले बिना किसी चेतावनी के होते हैं,
                    और जब व्यक्ति को इसकी कम से कम उम्मीद होती है। दिल्ली जैसे
                    बड़े शहरों में, ये हमले और भी आम हैं।
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 mt-3 inline-block text-accent-foreground hover:bg-orange-600/80 rounded-full px-6 py-3  transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
                <div className="w-1/3 bg-card  dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={j}
                    alt="Project 3"
                    className=" h-1/3 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">कानूनी सहायता</h3>
                  <p className="text-sm leading-relaxed">
                    हमारी संस्था उन लोगों को कानूनी सहायता प्रदान करती है
                    जिन्हें न्याय की आवश्यकता है लेकिन वे आर्थिक तंगी के कारण
                    न्याय नहीं पा सकते। हमारा उद्देश्य है कि हर व्यक्ति को न्याय
                    का अधिकार मिले, चाहे वह किसी भी वर्ग या पृष्ठभूमि से हो।
                    हमारे विशेषज्ञ वकील और सलाहकार उनकी सहायता के लिए हमेशा
                    तैयार रहते हैं।
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 mt-16 inline-block text-accent-foreground hover:bg-accent/80 rounded-full px-6 py-3  transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
              </div>
              <div className="gap-8  flex">
                <div className=" w-1/3 bg-card dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={kausal}
                    alt="Project 4"
                    className=" h-1/3 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">कौशल विकास</h3>
                  <p className="text-sm leading-relaxed">
                    जैसा कि इसी नाम से पता चलता है, विश्वकर्मा वंशज इंटरनेशनल
                    फेडरेशन, सदस्यों द्वारा ली गई एक नई दिशा है। विश्वकर्मा वंश
                    इंटरनेशनल फेडरेशन की कल्पना इस एहसास के साथ की गई थी कि
                    विश्वकर्मा वंश इंटरनेशनल फेडरेशन के युवा वयस्कों को वयस्कता
                    की जरूरतों के लिए उचित रूप से अनुकूलित करने के लिए कौशल से
                    लैस किया जाना चाहिए और इस तरह शारीरिक और भावनात्मक रूप से
                    स्वतंत्र रूप से कार्य करना होगा। कार्यक्रम का उद्देश्य एक
                    बुनियादी ढांचा तैयार करना है, जो युवा वयस्कों और परिवार के
                    लिए स्कूल से बाहरी दुनिया तक सुचारू स्नातक सुनिश्चित करता
                    है। 
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 text-accent-foreground hover:bg-accent/80 rounded-full px-6 py-3 mt-16 inline-block transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
                <div className="w-1/3 bg-card dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={poverty}
                    alt="Project 5"
                    className=" h-1/3 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    गरीबी और सामाजिक अन्याय
                  </h3>
                  <p className="text-sm leading-relaxed">
                    गरीबी में रहने वाले लोग अपराध, दुर्व्यवहार और शोषण के प्रति
                    असाधारण रूप से संवेदनशील होते हैं। यदि उनके पास इन कार्यों
                    के खिलाफ वास्तविक और प्रभावी सहारा लेने की क्षमता नहीं है,
                    तो दण्ड से मुक्ति और असमानता बनी रहती है, और उनकी भेद्यता और
                    भी बढ़ जाती है। प्रभावी और सुलभ न्याय प्रणालियाँ आर्थिक और
                    सामाजिक अधिकारों पर प्रगतिशील न्यायशास्त्र विकसित करने के
                    लिए उपकरण हो सकती हैं - किफायती आवास के प्रावधान को अनिवार्य
                    बनाना, या शक्तिशाली सार्वजनिक या निजी अभिनेताओं द्वारा उनके
                    शोषण का समाधान करना।
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 mt-16 inline-block text-accent-foreground hover:bg-orange-600/80 rounded-full px-6 py-3  transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
                <div className="w-1/3 bg-card  dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={health}
                    alt="Project 6"
                    className=" h-1/3 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    स्वास्थ्य कार्यक्रम
                  </h3>
                  <p className="text-sm leading-relaxed">
                    स्थिति समय पर देखभाल और निदान की मांग करती है जो मृत्यु दर
                    की घटनाओं को कम कर सकती है, खासकर बच्चों और महिलाओं में।
                    विश्वकर्मा वंसज इंटरनेशनल फेडरेशन हेल्थ कैंप एक ऐसी विशेष
                    पहल है, जो दूरदराज के ग्रामीण इलाकों और मलिन बस्तियों में
                    हाशिए पर रहने वाले समुदाय की तत्काल स्वास्थ्य देखभाल की
                    जरूरतों को पूरा करने के लिए स्टैंडअलोन कैंपों के माध्यम से
                    स्वास्थ्य सेवाएं प्रदान करता है, अस्पताल मीलों दूर हैं।
                    चयनित हस्तक्षेप क्षेत्रों में बड़ी संख्या में लोगों को
                    व्यापक स्वास्थ्य सेवाएं - उपचारात्मक, निवारक, प्रोत्साहन और
                    रेफरल प्रदान करने के लिए देश भर में बड़े पैमाने पर अनुकूलित
                    स्वास्थ्य शिविर आयोजित किए जाते हैं।
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 mt-6 inline-block text-accent-foreground hover:bg-accent/80 rounded-full px-6 py-3  transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
              </div>
              <div className="gap-8  flex">
                <div className=" w-1/3 bg-card dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={disaster}
                    alt="Project 7"
                    className=" h-1/3 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">आपदा तैयारी</h3>
                  <p className="text-sm leading-relaxed">
                    प्राकृतिक आपदाओं की भविष्यवाणी किसी के द्वारा नहीं की जा
                    सकती है और वे हमेशा अप्रत्याशित रूप से आती हैं - जैसे तूफान,
                    तूफान, बवंडर, भूकंप, सुनामी, बाढ़ या मानव निर्मित संकट
                    आवर्ती और घातक खतरे हैं - इसलिए हम आपातकालीन आपूर्ति पहले से
                    ही करते हैं, समुदायों को आपदा की योजना बनाने में मदद करते
                    हैं। हमारी आपदा तैयारी पहल के माध्यम से, हम इन क्षेत्रों में
                    कई देशों में साझेदारों को आपदा के 72 घंटों के भीतर विस्थापित
                    परिवारों की मदद के लिए महत्वपूर्ण आपातकालीन आपूर्ति खरीदने
                    और पहले से तैयार करने में मदद करते हैं।
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 text-accent-foreground hover:bg-accent/80 rounded-full px-6 py-3 mt-3 inline-block transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
                <div className="w-1/3 bg-card dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={child}
                    alt="Project 8"
                    className=" h-1/3 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    बच्चों की तस्करी
                  </h3>
                  <p className="text-sm leading-relaxed">
                    यह गरीब और हाशिए पर रहने वाले समुदायों के बच्चे हैं जिनकी
                    अक्सर तस्करी कर श्रम में धकेल दिया जाता है। इन बच्चों के
                    माता-पिता को उनकी खराब सामाजिक-आर्थिक परिस्थितियों के कारण
                    या तो धोखा दिया जाता है या लालच दिया जाता है, जिससे उन्हें
                    आजीविका के बेहतर विकल्पों के लिए अपने बच्चों को 'भेजने' या
                    'बेचने' के लिए मजबूर होना पड़ता है। जागरूकता की कमी एक ऐसी
                    स्थिति है जिसका फायदा तस्कर उठाते हैं,  तस्कर छोटे बच्चों के माता-पिता को
                    दैनिक मजदूरी का वादा करते हैं और उन्हें बड़े शहरों में ले
                    जाते हैं जहां अक्सर उनसे वस्तुओं के रूप में व्यवहार किया
                    जाता है। 
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 mt-8 inline-block text-accent-foreground hover:bg-orange-600/80 rounded-full px-6 py-3  transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
                <div className="w-1/3 bg-card dark:bg-card-foreground rounded-lg p-6 shadow-md bg-white mt-3">
                  <img
                    src={rb}
                    alt="Project 2"
                    className=" h-70 object-cover rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                  रोटी बैंक
                  </h3>
                  <p className="text-sm leading-relaxed">
                  हमारी संस्था, विश्वकर्मा वंशज इंटरनेशनल फेडरेशन, 'रोटी बैंक' के माध्यम से भूखे और जरूरतमंद लोगों तक भोजन पहुँचाने का कार्य कर रही है। हमारा उद्देश्य यह सुनिश्चित करना है कि कोई भी व्यक्ति भूखा न सोए। इस प्रयास को सफल बनाने के लिए हम आपके सहयोग की आवश्यकता है। आप भी इस महान कार्य में योगदान देकर समाज की सेवा कर सकते हैं। आपका छोटा सा योगदान किसी की भूख मिटाकर उसे नई उम्मीद और जीवन की दिशा दे सकता है। आइए, हमारे साथ जुड़ें और इस पुण्य कार्य में अपना अमूल्य सहयोग प्रदान करें।
                  </p>
                  <a
                    href="/DonateNow"
                    className="bg-orange-400 mt-3 inline-block text-accent-foreground hover:bg-orange-600/80 rounded-full px-6 py-3  transition-colors duration-300"
                  >
                    Donate
                  </a>
                </div>
                
              </div>
            </div>
          </section>
    </div>
  )
}

export default Missions
