// importar hojas de estilo
import '../../styles/paragraphLink/paragraph-link.css';
import PropTypes from 'prop-types';


// Props: Comunican los componentes padres con los componentes hijos.
const ParagraphLink = ( {href, color="gray", children}  ) => { // { clave:valor, href: ""  }
  //console.log( props );

  const myParagraph = (
    <>
      <a
        className="color-anchor"
        style={{color:color}}
        id="anchor-paragraph"
        href= { href }
        target= '_blank'

      >
        <p className="content"> { children } </p>
      </a>
    </>
  );

  return myParagraph;
};

ParagraphLink.propTypes = {
    href : PropTypes.string.isRequired
}

export default ParagraphLink; // exportación por default.



/*
Desestructuración
  const [varA, , varB] = [23 , 45, 67];

  const {varC, varD:varG } = {varC, varF, varG, }

*/