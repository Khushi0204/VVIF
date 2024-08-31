import React, { useRef } from 'react';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Certificate = () => {
  const canvasRef = useRef(null);

  const generateCertificate = () => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });

    // Load the certificate template image
    fabric.Image.fromURL('/path-to-your-certificate-template.jpg', function (img) {
      img.scaleToWidth(canvas.width);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));

      // Add the user's name (customize as needed)
      const nameText = new fabric.Text('User Name', {
        left: 400, // Adjust position
        top: 300,  // Adjust position
        fontSize: 30,
        fill: '#000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        originX: 'center',
      });
      canvas.add(nameText);

      // Render the final image
      canvas.renderAll();
    });
  };

  const downloadCertificate = async () => {
    const canvas = canvasRef.current;

    // Use html2canvas to convert the canvas to an image
    const image = await html2canvas(canvas).then((canvas) => canvas.toDataURL('image/png'));

    // Create a PDF using jsPDF and add the image
    const pdf = new jsPDF('landscape', 'px', [canvas.width, canvas.height]);
    pdf.addImage(image, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('certificate.pdf');
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <button onClick={generateCertificate}>Generate Certificate</button>
      <button onClick={downloadCertificate}>Download Certificate</button>
    </div>
  );
};

export default Certificate;
