import upi from "../../assets/upi.jpeg"
export default function Widget() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
        <div className="max-w-4xl w-full bg-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img src={upi} alt="UPI QR Code" className="rounded-lg shadow-md"></img>
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <h1 className="text-2xl font-bold mb-4">जरूरतमंदों की मदद के लिए दान करें</h1>
            <p className="text-muted-foreground mb-4">
            आपका योगदान जरूरतमंद लोगों के जीवन में महत्वपूर्ण बदलाव ला सकता है। UPI के माध्यम से दान करने के लिए QR कोड को स्कैन करें। हर छोटी-छोटी मदद मददगार होती है और इसकी बहुत सराहना की जाती है।
            </p>
            {/* <button className="bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-lg">
              Donate Now
            </button> */}
          </div>
        </div>
      </div>
  )
}