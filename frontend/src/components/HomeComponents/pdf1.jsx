import React from 'react';

const DOWNLOAD_BUTTON_CLASSES = 'bg-orange-300 hover:bg-green-500 text-primary-foreground p-3 rounded-md shadow-md hover:bg-primary/80';

const pdf = () => {
  const handleDownload = () => {
    const pdfPath = 'path/to/pdf/file.pdf';

    fetch(pdfPath)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downloaded-file.pdf';
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
