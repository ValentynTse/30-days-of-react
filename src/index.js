import React from 'react';
import { createRoot } from 'react-dom/client';

import { Countries, countriesData } from './js/modules/countries';
import asabenehImage from './images/asabeneh.jpg';
import { Header } from './js/modules/header';
import { Main } from './js/modules/main';
import { Footer } from './js/modules/footer';

// Header Component
// Functional component
// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Asabeneh Yetayeh</p>
//       <small>Oct 6, 2020</small>
//     </div>
//   </header>
// )

//===========================================================================
// class based component
// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>Welcome to 30 Days Of React</h1>
//           <h2>Getting Started React</h2>
//           <h3>JavaScript Library</h3>
//           <p>Asabeneh Yetayeh</p>
//           <small>Oct 7, 2020</small>
//         </div>
//       </header>
//     )
//   }
// }

//============================================================================
// class base component
// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // the code inside the constructor run before any other code
//   }
//   render() {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>Welcome to 30 Days Of React</h1>
//           <h2>Getting Started React</h2>
//           <h3>JavaScript Library</h3>
//           <p>Asabeneh Yetayeh</p>
//           <small>Oct 7, 2020</small>
//         </div>
//       </header>
//     )
//   }
// }

//============================================================================
// class base component
// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // the code inside the constructor run before any other code
//   }
//   render() {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>Welcome to 30 Days Of React</h1>
//           <h2>Getting Started React</h2>
//           <h3>JavaScript Library</h3>
//           <p>Asabeneh Yetayeh</p>
//           <small>Oct 7, 2020</small>
//         </div>
//       </header>
//     )
//   }
// }

// TechList Component
// class base component
// class TechList extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const techs = ['HTML', 'CSS', 'JavaScript']
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techsFormatted
//   }
// }

// Main Component
// Class Component
// class Main extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <main>
//         <div className='main-wrapper'>
//           <p>Prerequisite to get started react.js:</p>
//           <ul>
//             <TechList />
//           </ul>
//         </div>
//       </main>
//     )
//   }
// }

// Footer Component
// Class component
// class Footer extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <footer>
//         <div className='footer-wrapper'>
//           <p>Copyright 2020</p>
//         </div>
//       </footer>
//     )
//   }
// }

// The App, or the parent or the container component
// Class Component
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className='app'>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }
// }

//=================================================================================

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
    isDarkMode: false,
    randomCountry: null,
  };
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }
  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  // Change background color
  changeBackground = () => {
    const hexaColor = () => {
      let str = '0123456789abcdef';
      let color = '';
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
      }
      return '#' + color;
    };
    const newBackgroundColor = hexaColor();
    this.setState({
      styles: {
        backgroundColor: newBackgroundColor,
        color: 'white', // Assuming you want to set the text color to white
      },
    });
  };
  showRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countriesData.length);
    const randomCountry = countriesData[randomIndex];
    this.setState({ randomCountry });
  };
  changeMode = () => {
    // Toggle the dark mode
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };
  render() {
    const { isDarkMode, randomCountry } = this.state;
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }
    return (
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`} style={this.state.styles}>
        <Header data={data} isDarkMode={isDarkMode} />        
        <Main
          isDarkMode={isDarkMode}
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          changeMode={this.changeMode}
          showRandomCountry={this.showRandomCountry}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
          />
        {randomCountry && <Countries data={randomCountry} />}
        <Footer date={new Date()} isDarkMode={isDarkMode} />
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);

