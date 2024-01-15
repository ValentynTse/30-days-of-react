import React from 'react';

// class based component
class Header extends React.Component {
   constructor(props) {
      super(props)
      // the code inside the constructor run before any other code
   }
   render() {
      console.log(this.props.data)
      const {
         welcome,
         title,
         subtitle,
         author: { firstName, lastName },
         date,
      } = this.props.data

      return (
         <header className={`header ${this.props.isDarkMode ? 'dark-mode' : ''}`}>
            <div className='header-wrapper'>
               <h1>{welcome}</h1>
               <h2>{title}</h2>
               <h3>{subtitle}</h3>
               <p>
                  {firstName} {lastName}
               </p>
               <small>{date}</small>
            </div>
         </header>
      )
   }
}

export{Header}