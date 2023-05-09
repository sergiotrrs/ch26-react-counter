// Props: Comunican los componentes padres con los componentes hijos.
const ParagraphLink = ( {href, color, children}  ) => { // { clave:valor, href: ""  }
  //console.log( props );

  const myParagraph = (
    <>
      <a
        style={ { textDecoration: "none", color: color } }
        href= { href }
        target= '_blank'
      >
        <p> { children } </p>
      </a>
    </>
  );

  return myParagraph;
};

export default ParagraphLink; // exportación por default.

/*
Desestructuración
  const [varA, , varB] = [23 , 45, 67];

  const {varC, varD:varG } = {varC, varF, varG, }

*/