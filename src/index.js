import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ParagraphLink } from './components/paragraphLink/ParagraphLink';
import P  from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>
     {/* <p href="http" > texto</p> */}
     <P href="https://legacy.reactjs.org/" color="red" >Página React</P>
     <P href="https://youtube.com" color="blue" >Página Youtube</P>
     <P href="https://linkedin.com" color="pink" >Página LinkedIn</P>
  </React.StrictMode>
);

