import React, {Component} from 'react';

class Footer extends Component{
   render() {
      const { date, isDarkMode } = this.props;
      return (
         <footer className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className='footer-wrapper'>
               <p>Copyright {date.getFullYear()}</p>
            </div>
         </footer>
      )
   }
} 

export default Footer;