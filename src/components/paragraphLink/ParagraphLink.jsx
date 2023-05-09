// Props: Comunican los componentes padres con los componentes hijos.

const ParagraphLink = ( propiedades  ) => { // { clave:valor, href: ""  }

    console.log( propiedades );

  const myParagraph = (
    <>
      <a
        style={ { textDecoration: "none", color: "purple" } }
        href= { propiedades.href }
        target= '_blank'
      >
        <p>Te llevo al infinito {5 * 5} </p>
      </a>
    </>
  );

  return myParagraph;
};

export default ParagraphLink; // exportación por default.
