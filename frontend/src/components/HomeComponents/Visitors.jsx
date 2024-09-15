import React, { useEffect, useState } from 'react';

// HomePageWithNGOStatistics component
const HomePageWithNGOStatistics = () => {
  const [visitors, setVisitors] = useState(100);
  const [donors, setDonors] = useState(10); // Example donor count

  useEffect(() => {
    // Check and update visitor count from local storage
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setVisitors(parseInt(storedCount));
    } else {
      localStorage.setItem('visitorCount', 1);
      setVisitors(1);
    }

    setVisitors((prevCount) => {
      const updatedCount = prevCount + 1;
      localStorage.setItem('visitorCount', updatedCount);
      return updatedCount;
    });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.statistics}>
        <div style={styles.statItem}>
          <p style={styles.statTitle}>कुल आगंतुक</p>
          <p style={styles.statValue}>{visitors}</p>
        </div>
        <div style={styles.statItem}>
          <p style={styles.statTitle}>कुल दानकर्ता</p>
          <p style={styles.statValue}>{donors}</p>
        </div>
      </div>
    </div>
  );
};

// Inline CSS-in-JS styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '15px',
    padding: '10px',
    width: '100%',
    // backgroundColor: 'gainsboro',
  },
  statistics: {
    display: 'flex',
    justifyContent: 'space-around', // Space around the items
    alignItems: 'center', // Vertically align the items
    backgroundColor: 'tomato',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '100%',
    margin: 'auto',
  },
  statItem: {
    marginBottom: '0px',
  },
  statTitle: {
    fontSize: '18px',
    color: 'white',
  },
  statValue: {
    fontSize: '40px',
    color: 'white',
    fontWeight: 'bold',
  },
};

export default HomePageWithNGOStatistics;
