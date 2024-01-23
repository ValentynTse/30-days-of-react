import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css'




//=================================================================================
// A button component
// const Button = ({ text, onClick, style }) => (
//   <button style={style} onClick={onClick}>
//      {text}
//   </button>
// )

// CSS styles in JavaScript Object
// const buttonStyles = {
//   display: 'block',
//   margin: '0 auto',
//   width:280,
//   backgroundColor: '#61dbfb',
//   padding: 10,
//   border: 'none',
//   borderRadius: 5,
//   // margin: 3,
//   cursor: 'pointer',
//   fontSize: 18,
//   color: 'white',
// }

// const Login = () => (
//   <div>
//     <h3>Please Login</h3>
//   </div>
// )
// const Welcome = (props) => (
//   <div>
//     <h1>Welcome to 30 Days Of React</h1>
//   </div>
// )
// class App extends React.Component {
  // state = {
  //   loggedIn: false,
  //   count: 0,
  //   styles: {
  //     backgroundColor: '',
  //     color: '',
  //   },
  //   isDarkMode: false,
  //   randomCountry: null,
  // };
    
  
  // addOne = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }
  // // method which subtract one to the state
  // minusOne = () => {
  //   this.setState({ count: this.state.count - 1 })
  // }
  
  
  // Change background color
  // changeBackground = () => {
  //   const hexaColor = () => {
  //     let str = '0123456789abcdef';
  //     let color = '';
  //     for (let i = 0; i < 6; i++) {
  //       let index = Math.floor(Math.random() * str.length);
  //       color += str[index];
  //     }
  //     return '#' + color;
  //   };
  //   const newBackgroundColor = hexaColor();
  //   this.setState({
  //     styles: {
  //       backgroundColor: newBackgroundColor,
  //       color: 'white', // Assuming you want to set the text color to white
  //     },
  //   });
  // };
  // showRandomCountry = () => {
  //   const randomIndex = Math.floor(Math.random() * countriesData.length);
  //   const randomCountry = countriesData[randomIndex];
  //   this.setState({ randomCountry });
  // };
  
  // render() {
    
    // const data = {
    //   welcome: 'Welcome to 30 Days Of React',
    //   title: 'Getting Started React',
    //   subtitle: 'JavaScript Library',
    //   author: {
    //     firstName: 'Asabeneh',
    //     lastName: 'Yetayeh',
    //   },
    //   date: 'Oct 7, 2020',
    // }

    // conditional rendering using if and else statement
    // let status
    // let text

    // if (this.state.loggedIn) {
    //   status = <h1>Welcome to 30 Days Of React</h1>
    //   text = 'Logout'
    // } else {
    //   status = <h3>Please Login</h3>
    //   text = 'Login'
    // }

    // conditional rendering using ternary operator
    // let status = this.state.loggedIn ? (
    //   <h1>Welcome to 30 Days Of React</h1>
    // ) : (
    //   <h3>Please Login</h3>
    // )

    // const status = this.state.loggedIn ? <Welcome /> : <Login />

    // const techs = ['HTML', 'CSS', 'JavaScript']
    // const date = new Date()
    // copying the author from data object to user variable using spread operator
    // const user = { ...data.author, image: asabenehImage }
    // return (
    //   <div className={`app ${isDarkMode ? 'dark-mode' : ''}`} style={this.state.styles}>
    //     <Header data={data} isDarkMode={isDarkMode} /> 
    //     {status}
    //     <Button
    //       text={this.state.loggedIn ? 'Logout' : 'Login'}
    //       style={buttonStyles}
    //       onClick={this.handleLogin} />
    //     <Main
    //       isDarkMode={isDarkMode}
    //       user={user}
    //       techs={techs}
    //       handleTime={this.handleTime}
    //       greetPeople={this.greetPeople}
    //       changeBackground={this.changeBackground}
    //       changeMode={this.changeMode}
    //       showRandomCountry={this.showRandomCountry}
    //       addOne={this.addOne}
    //       minusOne={this.minusOne}
    //       count={this.state.count}
    //       />
    //     {randomCountry && <Countries data={randomCountry} />}
    //     <Footer date={new Date()} isDarkMode={isDarkMode} />
    //   </div>
    // )
//   }
// }

const root = createRoot(document.getElementById('root'));

root.render(<App />);

