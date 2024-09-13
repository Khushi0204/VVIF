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
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd',textAlign: 'center',  }}>
      <h2 className='text-3xl text-red-500 mx-auto w-fit m-2'>{title}</h2>
      <p>{isExpanded ? <pre  style={{
            whiteSpace: 'pre-wrap',     // Preserve line breaks
            fontFamily: 'inherit',      // Use inherited font-family
            textAlign: 'center', 
            justifyContent:'center',       // Center align the text
            fontSize: '20px',           // Set the text size
            color: '#333',              // Set the text color (optional)
            lineHeight: '2',
            wordSpacing:'5px', 
            textAlign: 'center',         // Set line height (optional)
          }}>
          {fullDescription}
        </pre> : description}</p>
      
      <button className={SHARED_CLASSES.button} onClick={handleReadMore}>
      {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Container;
