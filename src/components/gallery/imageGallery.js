import React from 'react';
import htmlLogo from '../../images/html_logo.png';
import cssLogo from '../../images/css_logo.png';
import jsLogo from '../../images/js_logo.png';
import reactLogo from '../../images/react_logo.png';

const ImageGallery = () => {
   return (
      <div>
         <h2>Front End Technologies</h2>
         <div className="image-container">
            <img src={htmlLogo} alt="HTML" />
            <img src={cssLogo} alt="CSS" />
            <img src={jsLogo} alt="JS" />
            <img src={reactLogo} alt="React" />
         </div>
      </div>
   );
};

export default ImageGallery;