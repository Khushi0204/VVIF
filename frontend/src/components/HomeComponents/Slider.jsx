
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

    const scrollInterval = setInterval(scrollStep, 50); // Adjust delay for speed

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  const videoIds = [
    
    "VyTrZGzpNo0",
    "7DHlPhUGYcI",
    "JhF24T0VVH4",
    "xDYxAxbCXis",
    "Kzc9pn43xZI",
    "We97_ge8IrM",
    "myLcoOStLNk",
    
    // Add more YouTube video IDs as needed
  ];

  return (
    <div className="scroller-container" ref={scrollerRef}>
      <div className="scroller-content">
        {videoIds.concat(videoIds).map((id, index) => (
          <li
            key={index}
            className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start"
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=0&encrypted-media`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`video-${index}`}
              width="100%"
              height="200" // Adjust as needed
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default VerticalScroller;

// CSS (Inside the same file)
const style = `
  .scroller-container {
    height: 400px;
    width: 300px;
    overflow: hidden;
    position: relative;
    margin:auto;
  }

  .scroller-content {
    display: flex;
    flex-direction: column;
  }

  .scroller-content li {
    width: 100%;
    margin: 10px 0;
    list-style: none; /* Remove bullet points */
  }
`;

// Insert styles into the document head dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = style;
document.head.appendChild(styleSheet);
