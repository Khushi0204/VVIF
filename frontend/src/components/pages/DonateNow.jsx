import upi from "../../assets/upi.jpeg";

export default function Widget() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="max-w-4xl w-full bg-card p-6 rounded-lg shadow-lg flex flex-col items-center md:items-start">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
          जरूरतमंदों की मदद के लिए दान करें
        </h1>

        {/* Options: QR Code or Bank Transfer */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option 1: Scan QR Code */}
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">QR कोड स्कैन करें</h2>
            <img src={upi} alt="UPI QR Code" className="rounded-lg shadow-md max-w-xs mb-4"></img>
            <p className="text-muted-foreground text-center">
              UPI के माध्यम से दान करने के लिए QR कोड को स्कैन करें।
            </p>
          </div>

          {/* Option 2: Bank Transfer */}
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">बैंक द्वारा स्थानांतरण</h2>
            <div className="w-full bg-white p-4 rounded-lg shadow-md">
              <p><strong>बैंक का नाम:</strong> Bank of Baroda
              </p>
              <p><strong>खाता संख्या:</strong> 58180100003682</p>
              <p><strong>IFSC कोड:</strong> BARB0LONIXX</p>
              <p><strong>खाता धारक का नाम:</strong> Ambey  lal Sharma</p>
            </div>
            <p className="text-muted-foreground text-center mt-4">
              आप बैंक विवरण का उपयोग करके सीधे दान स्थानांतरित कर सकते हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
