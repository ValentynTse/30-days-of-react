import React from 'react';

// Footer Component
// Class component
class Footer extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <footer className={`footer ${this.props.isDarkMode ? 'dark-mode' : ''}`}>
            <div className='footer-wrapper'>
               <p>Copyright {this.props.date.getFullYear()}</p>
            </div>
         </footer>
      )
   }
}

export{Footer}