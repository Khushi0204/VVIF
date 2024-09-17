import React, { useEffect, useState } from 'react';

// VisitorCounter Component
const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(10000); // Initial count starting at 10000

  useEffect(() => {
    // Fetch global visitor count from CountAPI
    fetch('https://api.countapi.xyz/hit/https://vishwakarmavansajfederation.com/')
      .then((response) => response.json())
      .then((data) => {
        setVisitorCount(data.value + 10000); // Add 10000 to the fetched count
      })
      .catch((error) => {
        console.error('Error fetching visitor count:', error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 className='text-sm'>Total Visitors</h1>
      <p style={styles.visitorCount}>{visitorCount}+</p>
    </div>
  );
};

// Inline CSS for simple styling
const styles = {
  container: {
    textAlign: 'left',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    width: '50%',
    maxWidth: '300px',
    // margin: '0px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    margin:'15px 0px',
  },
  visitorCount: {
    fontSize: '2rem',
    color: 'tomato',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.5rem',
    },
  },
};

export default VisitorCounter;
