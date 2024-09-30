import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // PDF viewer
import '@react-pdf-viewer/core/lib/styles/index.css';    // PDF viewer styles
import B from '../../assets/pdfs/B.pdf';  // Import the PDF file
import Footer from '../HomeComponents/Footer';
import Header from '../HomeComponents/Header';

const App = () => {
  // Function to download the certificate
  const downloadCertificate = () => {
    const link = document.createElement('a');
    link.href = B;  // Set the href to the imported PDF file
    link.download = 'Brochure.pdf';  // Specify a name for the downloaded file
    link.click();
  };

  return (
    <div>
      <Header/>
    <div style={styles.container}>
      <h1 style={styles.heading}>Certificate Viewer</h1>

      {/* PDF Viewer */}
      <div style={styles.pdfViewer}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
    <Viewer fileUrl={B} />
</Worker>

      </div>

      {/* Action Buttons */}
      <div style={styles.actionButtons}>
        <button style={styles.button} onClick={downloadCertificate}>
          Download Certificate
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

const styles = {
  container: {
    Width: 'fit',
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
    padding: '10px',
    height: '500px',
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'space-around',
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
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default App;
