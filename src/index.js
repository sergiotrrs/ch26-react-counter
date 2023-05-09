import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ParagraphLink } from './components/paragraphLink/ParagraphLink';
import P  from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>
     {/* <p href="http" > texto</p> */}
     <P href="https://legacy.reactjs.org/" /> {/* color rojo */}
     <P href="https://youtube.com" /> {/* color verde */}
     <P href="https://linkedin.com"/> {/* color morado */}    
  </React.StrictMode>
);

