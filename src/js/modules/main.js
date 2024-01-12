import React from 'react';

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
      return (
         <main>
            <div className='main-wrapper'>
               <p>Prerequisite to get started react.js:</p>
               <ul>
                  <TechList techs={this.props.techs} />
               </ul>
               <UserCard user={this.props.user} />
               <Button
                  text='Greet People'
                  onClick={this.props.greetPeople}
                  style={buttonStyles}
               />
               <Button
                  text='Show Time'
                  onClick={this.props.handleTime}
                  style={buttonStyles}
               />
            </div>
         </main>
      )
   }
}

export { Main }