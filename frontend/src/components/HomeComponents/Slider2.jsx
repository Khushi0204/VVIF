import React, { useEffect, useRef } from "react";
import one from "../../assets/Gallery/1.jpg"
import two from "../../assets/Gallery/2.jpg"
import three from "../../assets/Gallery/3.jpg"
import four from "../../assets/Gallery/4.jpg"
import five from "../../assets/Gallery/5.jpg"
import six from "../../assets/Gallery/6.jpg"
import kausal from "../../assets/kausal.jpg";
import poverty from "../../assets/poverty.jpeg";
import health from "../../assets/health.jpg";
import disaster from "../../assets/disaster.jpeg";
import child from "../../assets/child.jpeg";
const images = [
  one,
  two,
  three ,
  four,
  five,
  six,
  kausal,
  poverty,
  health,
  disaster,
  child,
];

function App() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;
      scroller.scrollLeft = scrollAmount;
      
      if (scrollAmount >= scroller.scrollWidth - scroller.clientWidth) {
        scrollAmount = 0;
      }
    };

    const intervalId = setInterval(scroll, 20); // Adjust the speed here

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        ref={scrollerRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "hidden",
        }}
      >
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            style={{
              width: "300px",
              height: "150px",
              marginRight: "10px",
              objectFit: "cover",
              paddingBottom: "8px"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
