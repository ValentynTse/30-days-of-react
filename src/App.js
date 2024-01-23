import React from "react"
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { countriesData } from './data/countries';
import asabenehImage from './images/asabeneh.jpg';
import { showDate } from "./utils/display-date-and-time";


class App extends React.Component {
   state = {
      loggedIn: false,
      techs: ['HTML', 'CSS', 'JS'],
      message: 'Click show time or Greet people to change me',
      isDarkMode: false,
      count: 0,
      country: countriesData[1],
   }

   addOne = () => {
      this.setState({ count: this.state.count + 1 })
   }
   // method which subtract one to the state
   minusOne = () => {
      this.setState({ count: this.state.count - 1 })
   }

   handleLogin = () => {
      this.setState({
         loggedIn: !this.state.loggedIn,
      })
   }
   handleTime = () => {
      let message = showDate(new Date())
      this.setState({ message })
   }
   greetPeople = () => {
      let message = 'Welcome to 30 Days Of React Challenge, 2020'
      this.setState({ message })
   }
   changeMode = () => {
      // Toggle the dark mode
      this.setState((prevState) => ({
         isDarkMode: !prevState.isDarkMode,
      }));
   };

   render() {
      const { isDarkMode } = this.state;
      const data = {
         welcome: '30 Days Of React',
         title: 'Getting Started React',
         subtitle: 'JavaScript Library',
         author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
         },
         date: new Date(),
      }
      const techs = ['HTML', 'CSS', 'JavaScript']
      const user = { ...data.author, image: asabenehImage }

      return (
         <div className={`app ${isDarkMode ? 'dark-mode' : ''}`} >
            <Header data={data} isDarkMode={isDarkMode} />
            <Main
               isDarkMode={isDarkMode}
               techs={techs}
               handleTime={this.handleTime}
               greetPeople={this.greetPeople}
               changeMode={this.changeMode}
               loggedIn={this.state.loggedIn}
               handleLogin={this.handleLogin}
               message={this.state.message}
               country={this.state.country}
               user={user}
               count={this.state.count}
               addOne={this.addOne}
               minusOne={this.minusOne}
            />
            <Footer date={new Date()} isDarkMode={isDarkMode} />
         </div>
      )
   }
}

export default App