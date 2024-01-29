import React, { Component } from "react";
import { buttonStyles } from "../../styles/buttonStyles";

class LifeCycles extends Component {
   constructor(props) {
      super(props)
      console.log('I am  the constructor and  I will be the first to run.')
      this.state = {
         firstName: '',
      }
   }

   static getDerivedStateFromProps(props, state) {
      console.log(
         'I am getDerivedStateFromProps and I will be the second to run.'
      )
      return null
   }
   componentDidMount() {
      console.log('I am componentDidMount and I will be last to run.')
   }

   render() {
      console.log('I am render and I will be the third to run.')
      return (
         <div className='app'>
            <h2>React Component Life Cycle</h2>
         </div>
      )
   }
}
export default LifeCycles;

class Constructor extends Component {
   constructor(props) {
      super(props)
      console.log('I am  the constructor and  I will be the first to run.')
      this.state = {
         firstName: '',
      }
   }
   render() {
      return (
         <div className='app'>
            <h4>React Component Life Cycle</h4>
            <h5>The constructor is the first to Run</h5>
            <p>Author:{this.state.firstName}</p>
         </div>
      )
   }
}

export { Constructor };

const UserName = ({ firstName }) => (
   <div>
      <h4>{firstName}</h4>
   </div>
)

class GetDerivedState extends Component {
   constructor(props) {
      super(props)
      console.log('I am  the constructor and  I will be the first to run.')
      // we can write state inside or outside the constructor
      // if is written outside the constructor it does not need the keyword this
      this.state = {
         firstName: 'John',
      }
   }
   static getDerivedStateFromProps(props, state) {
      console.log(
         'I am getDerivedStateFromProps and I will be the second to run.'
      )
      return { firstName: props.firstName }
   }

   render() {
      return (
         <div className='app'>
            <h4>React Component Life Cycle</h4>
            <h5>getDerivedStateFromProps</h5>
            <UserName firstName={this.state.firstName} />
         </div>
      )
   }
}
export { GetDerivedState }

class DidMountMethod extends Component {
   constructor(props) {
      super(props)
      console.log('I am  the constructor and  I will be the first to run.')
      this.state = {
         firstName: 'John',
      }
   }
   componentDidMount() {
      console.log('I am componentDidMount and I will be last to run.')
      // after 3 seconds it resets the state
      setTimeout(() => {
         this.setState({
            firstName: 'Asabeneh',
         })
      }, 3000)
   }

   render() {
      return (
         <div className='app'>
            <h4>React Component Life Cycle</h4>
            <h5>componentDidMount Method</h5>
            {this.state.firstName}
         </div>
      )
   }
}

export { DidMountMethod }

class CallUsingFetch extends Component {
   constructor(props) {
      super(props)
      console.log('I am  the constructor and  I will be the first to run.')
      this.state = {
         data: [],
         loading: true,
         error: null,
      }
   }

   componentDidMount() {
      console.log('I am componentDidMount and I will be last to run.')
      const API_URL = 'https://restcountries.com/v3.1/all'
      fetch(API_URL)
         .then((response) => {
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            return response.json()
         })
         .then((data) => {
            console.log(data)
            this.setState({
               data,
               loading: false,
            })
         })
         .catch((error) => {
            console.error('Error fetching data:', error);
            this.setState({
               loading: false,
               error: 'Error fetching data',
            });
         })
   }
   //general data output:
   // render() {
   //    const { data, loading, error } = this.state;
   //    return (
   //       <div className="app">
   //          <h1>Calling API</h1>
   //          {loading && <p>Loading...</p>}
   //          {error && <p>{error}</p>}
   //          {!loading && !error && (
   //             <div>
   //                <p>There are {this.state.data.length} countries in the API</p>
   //                <div className='country__gallery'>
   //                   {data.map((country) => (
   //                      <div key={country.name.common}>
   //                         <div className="country__image">
   //                            {' '}
   //                            <img src={country.flags.png} alt={country.name.common} loading='lazy' />{' '}
   //                         </div>
   //                         <div>
   //                            <h4>{country.name.common}</h4>
   //                            <p>Capital: {country.capital}</p>
   //                            <p>Population: {country.population}</p>
   //                         </div>
   //                      </div>
   //                   ))}
   //                </div>
   //             </div>
   //          )}
   //       </div>
   //    )
   // }

   //using a separate method to render the data:
   renderCountries = () => {
      return this.state.data.slice(0, 4).map((country) => {
         return (
            <div key={country.name.common}>
               <div className="country__image">
                  {' '}
                  <img src={country.flags.png} alt={country.name.common} loading='lazy' />{' '}
               </div>
               <div>
                  <h4>{country.name.common}</h4>
                  <p>Capital: {country.capital}</p>
                  <p>Population: {country.population}</p>
               </div>
            </div>
         )
      })
   }

   //general data output:
   render() {
      return (
         <div className="app">
            <h2>Calling API:</h2>
            <div>
               <p>There are {this.state.data.length} countries in the API</p>
               <div className='country__gallery'>{this.renderCountries()}</div>
            </div>
         </div>
      )
   }
}
export { CallUsingFetch }

class ComponentUpdate extends Component {
   constructor(props) {
      super(props)
      console.log('I am  the constructor and  I will be the first to run.')
      this.state = {
         day: 1,
         congratulate: '',
      }
   }

   shouldComponentUpdate(nextProps, nextState) {
      console.log(nextProps, nextState)
      console.log(nextState.day)
      if (nextState.day > 31) {
         return false
      } else {
         return true
      }

   }
   // the doChallenge increment the day by one
   doChallenge = () => {
      this.setState({
         day: this.state.day + 1,
      })
   }
   componentDidUpdate(prevProps, prevState) {
      if (prevState.day === 30) {
         this.setState({
            congratulate: 'Congratulations,Challenge has been completed',
         })
      }
      console.log(prevState, prevProps)
   }
   render() {
      return (
         <div className='app'>
            <h4>React Component Life Cycle</h4>
            <button onClick={this.doChallenge} style={buttonStyles}>Do Challenge</button>
            <p>Challenge: Day {this.state.day}</p>
            {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
         </div>
      )
   }
}
export { ComponentUpdate }