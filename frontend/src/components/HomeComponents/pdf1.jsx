import React from 'react';
import br from '../../assets/pdfs/Brochure.pdf'

const DOWNLOAD_BUTTON_CLASSES = 'bg-orange-300 hover:bg-green-500 text-primary-foreground p-3 rounded-md shadow-md hover:bg-primary/80';

const pdf = () => {
  const handleDownload = () => {
    const pdfPath = br;

    fetch(pdfPath)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Brochure_VVIF.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading the PDF file:', error));
  };

  return (
    <button className= {DOWNLOAD_BUTTON_CLASSES} onClick={handleDownload}>
      Download Brochure
    </button>
  );
};

export default pdf;
