import React from 'react';

const Footer =({date, isDarkMode})=>{
      return (
         <footer className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className='footer-wrapper'>
               <p>Copyright {date.getFullYear()}</p>
            </div>
         </footer>
      )
   
}

export default Footer;