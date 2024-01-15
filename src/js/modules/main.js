import React from 'react';

const Count = ({ count, addOne, minusOne }) => (
   <div>
      <h1>{count} </h1>
      <div>
         <Button text='+1' onClick={addOne} style={buttonStyles} />
         <Button text='-1' onClick={minusOne} style={buttonStyles} />
      </div>
   </div>
)
// TechList Component
// class base component
class TechList extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      const { techs } = this.props
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
   }
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
   <div className='user-card'>
      <img src={image} alt={firstName} />
      <h2>
         {firstName}
         {lastName}
      </h2>
   </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
   <button style={style} onClick={onClick}>
      {text}
   </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
   backgroundColor: '#61dbfb',
   padding: 10,
   border: 'none',
   borderRadius: 5,
   margin: 3,
   cursor: 'pointer',
   fontSize: 18,
   color: 'white',
}

// Main Component
// Class Component
class Main extends React.Component {
   constructor(props) {
      super(props)
   }
   render() {
      const {
         techs,
         user,
         greetPeople,
         handleTime,
         changeBackground,
         changeMode,
         count,
         addOne,
         minusOne,
      } = this.props
      return (
         <main>
            <div className='main-wrapper'>
               <p>Prerequisite to get started react.js:</p>
               <ul>
                  <TechList techs={techs} />
               </ul>
               <UserCard user={user} />
               <Button
                  text='Greet People'
                  onClick={greetPeople}
                  style={buttonStyles}
               />
               <Button
                  text='Show Time'
                  onClick={handleTime}
                  style={buttonStyles}
               />
               <Button
                  text='Change Background'
                  onClick={changeBackground}
                  style={buttonStyles}
               />
               <Button
                  text='Dark Mode'
                  onClick={changeMode}
                  style={buttonStyles}
               />
               <Count count={count} addOne={addOne} minusOne={minusOne} />
            </div>
         </main>
      )
   }
}

export { Main }