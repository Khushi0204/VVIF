import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // PDF viewer
import '@react-pdf-viewer/core/lib/styles/index.css';    // PDF viewer styles
import B from '../../assets/pdfs/ID.pdf';  // Import the PDF file

const App = () => {
  // Function to download the certificate
  const downloadCertificate = () => {
    const link = document.createElement('a');
    link.href = B;  // Set the href to the imported PDF file
    link.download = 'Certificate.pdf';  // Specify a name for the downloaded file
    link.click();
  };

  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.heading}>Certificate Viewer</h1>

        {/* PDF Viewer */}
        <div style={styles.pdfViewer}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={B} defaultScale={2.5} /> {/* Adjust the scale here */}
          </Worker>
        </div>

        {/* Action Buttons */}
        <div style={styles.actionButtons}>
          <button style={styles.button} onClick={downloadCertificate}>
            Download ID Card
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 'fit-content',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
  },
  pdfViewer: {
    marginBottom: '20px',
    border: '1px solid #ddd',
    padding: '0',   // No extra padding
    height: '600px',  // Increased height to fit the certificate
    width: '800px',   // Increased width to avoid cutting the border
    overflowY: 'scroll',  // Enable scrolling if needed
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
};

export default App;
