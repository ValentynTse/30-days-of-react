import React from 'react'
import { showDate } from '../../utils/display-date-and-time'
const Header = ({
   data: {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
   },
   isDarkMode
}) => {
   return (
      <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
         <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
               {firstName} {lastName}
            </p>
            <small>{showDate(date)}</small>
         </div>
      </header>
   )
}

export default Header