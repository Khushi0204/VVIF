import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer";


export default function Widget() {
  

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <header className="bg-orange-400 p-4 text-center m-2 rounded-2xl">
          <h1 className="text-2xl font-bold text-primary-foreground  ">अपना व्यापार बढ़ाएँ</h1>
        </header>
        <main className="flex-grow p-6">
          
          <div className="bg-card p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-card-foreground">
              Business Details
            </h2>
            <div className="mt-4 space-y-4">
              <div className="border-b border-muted p-2">
                <h3 className="font-bold text-foreground">
                  Keyfill Technologies
                </h3>
                <p className="text-muted-foreground">
                  N118, Trade Tower 2, Alpha 1 Commercial Belt, Greater Noida -
                  201301, Uttar Pradesh, India
                </p>
                <p className="text-muted-foreground">
                  Email: keyfilltechnologies@gmail.com
                </p>
                <p className="text-muted-foreground">Phone: 9659059072</p>
                <p className="text-muted-foreground">
                  Website:{" "}
                  <a
                    href="http://www.keyfilltechnologies.com"
                    className="text-blue-500"
                  >
                    www.keyfilltechnologies.com
                  </a>
                </p>
              </div>
              <div className="border-b border-muted p-2">
                <h3 className="font-bold text-foreground">
                  Shira Engineering Works
                </h3>
                <p className="text-muted-foreground">
                  Baildih Bad, Near, Beside Adi Power, Mathura, Mathura -
                  281006, Uttar Pradesh, India
                </p>
                <p className="text-muted-foreground">
                  Email: shiraengineering@gmail.com
                </p>
                <p className="text-muted-foreground">Phone: 9963211551</p>
                <p className="text-muted-foreground">Website: N/A</p>
              </div>
              <div className="border-b border-muted p-2">
                <h3 className="font-bold text-foreground">
                  Shira Engineering Works
                </h3>
                <p className="text-muted-foreground">
                  Baildih Bad, Near, Beside Adi Power, Mathura, Mathura -
                  281006, Uttar Pradesh, India
                </p>
                <p className="text-muted-foreground">
                  Email: shiraengineering@gmail.com
                </p>
                <p className="text-muted-foreground">Phone: 9963211551</p>
                <p className="text-muted-foreground">Website: N/A</p>
              </div>
              <div className="border-b border-muted p-2">
                <h3 className="font-bold text-foreground">
                  Shira Engineering Works
                </h3>
                <p className="text-muted-foreground">
                  Baildih Bad, Near, Beside Adi Power, Mathura, Mathura -
                  281006, Uttar Pradesh, India
                </p>
                <p className="text-muted-foreground">
                  Email: shiraengineering@gmail.com
                </p>
                <p className="text-muted-foreground">Phone: 9963211551</p>
                <p className="text-muted-foreground">Website: N/A</p>
              </div>
              <div className="border-b border-muted p-2">
                <h3 className="font-bold text-foreground">
                  Shira Engineering Works
                </h3>
                <p className="text-muted-foreground">
                  Baildih Bad, Near, Beside Adi Power, Mathura, Mathura -
                  281006, Uttar Pradesh, India
                </p>
                <p className="text-muted-foreground">
                  Email: shiraengineering@gmail.com
                </p>
                <p className="text-muted-foreground">Phone: 9963211551</p>
                <p className="text-muted-foreground">Website: N/A</p>
              </div>
            </div>
          </div>
          <div>contact : vishwakarmafederation@gmail.com for promotion related Query</div>
        </main>
      </div>
      <Footer />
    </>
  );
}
