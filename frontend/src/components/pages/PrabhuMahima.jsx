// Certainly! Below is the React component that refactors the provided HTML and JavaScript into a structured React component using hooks and smaller components. I've also added Tailwind CSS class strings that are repeated at least three times into a shared constant.

import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";
import React, { useState } from 'react';
import Container from '../HomeComponents/Container';
const SHARED_CLASSES = {
  container: 'bg-card text-card-foreground p-4 rounded-lg shadow-md w-full',
  button: 'mt-2 bg-orange-400 text-primary-foreground hover:bg-primary/80 p-2 rounded-lg',
  hiddenContent: 'hidden mt-2 space-y-2',
  common: 'bg-background text-foreground min-h-screen p-4 space-y-4',
};

// const Container = ({ title, description, contentId, detailedText, imgSrc }) => {
//   const [isContentVisible, setContentVisible] = useState(false);

//   const toggleContent = () => {
//     setContentVisible(!isContentVisible);
//   };

//   return (
   
//     <div className={SHARED_CLASSES.container}>
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <p className="text-muted-foreground">{description}</p>
//       <button className={SHARED_CLASSES.button} onClick={toggleContent}>
//         Read More
//       </button>
//       <div className={`${isContentVisible ? '' : 'hidden'} ${SHARED_CLASSES.hiddenContent}`}>
//         <p>{detailedText}</p>
//         <img src={imgSrc} alt={`Detailed view of ${title}`} className="w-full rounded-lg" />
//       </div>
//     </div>
    
//   );
// };

const App = () => {
  return (
    <>
    <Header/>
    <div className={SHARED_CLASSES.common}>
      <Container
        title="॥ श्री विश्वकर्मा जी की आरती ॥"
        description="जय श्री विश्वकर्मा जय श्री विश्वकर्मा। "
        contentId="content1"
        fullDescription={`जय श्री विश्वकर्मा जय श्री विश्वकर्मा।
        मंगल सुखकारी आरती जय श्री विश्वकर्मा॥
        जय श्री विश्वकर्मा जय श्री विश्वकर्मा।  
        कनक के भवन बनाये सुथरे। 
        स्तंभ खंभ मणि जड़ाऊ रचाए॥ 
        मंगल सुखकारी आरती जय श्री विश्वकर्मा। 
        जय श्री विश्वकर्मा जय श्री विश्वकर्मा।  
        सुन्दर आँगन कियो सजावन। 
        श्री हरि का मंदिर कियो बनावन॥ 
        मंगल सुखकारी आरती जय श्री विश्वकर्मा। 
        जय श्री विश्वकर्मा जय श्री विश्वकर्मा।  
        भाग्य विधाता जगत निर्माता। 
        विधि विधान के भी विधाता॥ 
        मंगल सुखकारी आरती जय श्री विश्वकर्मा। 
        जय श्री विश्वकर्मा जय श्री विश्वकर्मा।  
        श्री हरि के सेवक जग सेवक। 
        दुःख को हरता सुख का देवक॥ 
        मंगल सुखकारी आरती जय श्री विश्वकर्मा। 
        जय श्री विश्वकर्मा जय श्री विश्वकर्मा।  
        सृष्टि को रचने वाले विधाता। 
        सब पर कृपा करना विधाता॥ 
        मंगल सुखकारी आरती जय श्री विश्वकर्मा। 
        जय श्री विश्वकर्मा जय श्री विश्वकर्मा।`}
        imgSrc="https://placehold.co/600x400"
      />
      <Container
        title="Container Title 2"
        description="This is a brief description for container 2."
        contentId="content2"
        detailedText="Here is some more detailed information about container 2. You can add more text here."
        imgSrc="https://placehold.co/600x400"
      />
      <Container
        title="Container Title 3"
        description="This is a brief description for container 3."
        contentId="content3"
        detailedText="Here is some more detailed information about container 3. You can add more text here."
        imgSrc="https://placehold.co/600x400"
      />
    </div>
    <Footer/>
    </>
  );
};

export default App;

// ### Explanation:
// 1. **SHARED_CLASSES**: A constant object to store repeated Tailwind CSS class strings.
// 2. **Container Component**: A reusable component that takes in props for title, description, contentId, detailedText, and imgSrc. It uses the `useState` hook to manage the visibility of the detailed content.
// 3. **App Component**: The main component that renders multiple `Container` components with different props.

// This setup ensures that the code is modular, reusable, and easy to maintain.