import React, { useState } from 'react';
const SHARED_CLASSES = {
  container: 'bg-card text-card-foreground p-4 rounded-lg shadow-md w-full',
  button: 'mt-2 bg-orange-400 text-primary-foreground hover:bg-primary/80 p-2 rounded-lg',
  hiddenContent: 'hidden mt-2 space-y-2',
  common: 'bg-background text-foreground min-h-screen p-4 space-y-4',
};

const Container = ({ title, description, fullDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <h2>{title}</h2>
      <p>{isExpanded ? fullDescription : description}</p>
      {isExpanded && (
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
          {fullDescription}
        </pre>
      )}
      {/* <button onClick={handleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button> */}
      <button className={SHARED_CLASSES.button} onClick={handleReadMore}>
      {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Container;
