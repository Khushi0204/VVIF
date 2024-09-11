import bhgwan from "../../assets/bhgwan.jpeg";
import e from "../../assets/2.jpeg";
import c from "../../assets/7.jpeg";
import d from "../../assets/1.jpeg";
import b from "../../assets/b2.jpeg";
import yantra from "../../assets/yantra.jpeg";

import React, { useEffect, useRef } from "react";

const VerticalScroller = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    
    let scrollAmount = 0;

    const scrollStep = () => {
      scrollAmount += 1;  // Adjust the scroll step for smoother, noticeable movement
      scroller.scrollTop = scrollAmount;

      // If the scroller reaches the bottom, reset the scroll position back to the top
      if (scroller.scrollTop >= scroller.scrollHeight - scroller.clientHeight) {
        scrollAmount = 0; // Reset scroll amount to simulate infinite scrolling
      }
    };

    const scrollInterval = setInterval(scrollStep, 50); // Increased delay for slower speed

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  const images = [
    bhgwan,
    b, 
    d, 
    e,
    yantra,
    c
  ];

  return (
    <div className="scroller-container" ref={scrollerRef}>
      <div className="scroller-content">
        {images.concat(images).map((img, index) => (
          <img key={index} src={img} alt={`img-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default VerticalScroller;

// CSS (Inside the same file)
const style = `
  .scroller-container {
    height: 400px; /* Adjust height as needed */
    width: 300px; /* Adjust width as needed */
    overflow: hidden;
    position: relative;
  }

  .scroller-content {
    display: flex;
    flex-direction: column;
  }

  .scroller-content img {
    width: 100%;
    margin: 10px 0;
  }
`;

// Insert styles into the document head dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = style;
document.head.appendChild(styleSheet);

