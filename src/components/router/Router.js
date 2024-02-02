import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




// Contact component
const Contact = (props) => <h4>Contact us</h4>
// Challenge component
const Challenges = (props) => (
   <div>
      <h4>30 Days Of React Challenge</h4>
   </div>
)

class BrowserApp extends Component {
   render() {
      return (
         <Router>
            <Routes>
               {/* Add a route for the root path */}
               <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
               <Route path="/" element={<About/>} />
            </Routes>
            <Routes>
               <Route path="/" element={<Contact />} />
            </Routes>
            <Routes>
               <Route path="/" element={<Challenges />} />
            </Routes>
         </Router>
      )
   }
}

export default BrowserApp;