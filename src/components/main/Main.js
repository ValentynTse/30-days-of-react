import React,{Component} from 'react';
import Button from '../shared/Button';
import HexaColor from '../color/HexaColor';
import {Country} from '../country/Country';
import UserCard from '../user/UserCard';
import { buttonStyles } from '../../styles/buttonStyles';
import ImageGallery from '../gallery/imageGallery';
import Form from '../shared/Form';
import AlertBox from '../shared/AlertBox';
import Events from '../events/Events';
import MouseCoordinateDisplay from '../events/MouseCoordinates'
import FormComponent from '../events/FormComponent';
import FirstNameForm from '../forms/FirstNameForm';
import MultipleInputForm from '../forms/MultipleInputForm';
import DifferentInputsForm from '../forms/DifferentInputsForm';
import UncontrolledInput from '../forms/UncontrolledInput';
import LifeCycles, { CallUsingFetch, ComponentUpdate, Constructor, DidMountMethod, GetDerivedState } from '../lifeCycles/LifeCycles';
import BestInput from '../HOC/highOrderedComponents';

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
class TechList extends Component {
   render() {
      const { techs } = this.props
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
   }
}

const Message = ({ message }) => (
   <div
      style={{
         border: '2px solid #61dbfb',
         margin: 25,
         padding: 10,
      }}
   >
      <h3>{message}</h3>
   </div>
)
const Login = () => (
   <div>
      <h3>Please Login</h3>
   </div>
)
const Welcome = (props) => (
   <div style={{ border: '2px solid rgb(0,255,0', margin: 10, padding: 10 }}>
      <h2>Welcome to 30 Days Of React</h2>
   </div>
)

const MyAlertBox = () => (
   <div>
      <AlertBox type="warning" message="This is a warning message!" />
      <AlertBox type="success" message="This is a success message!" />
   </div>
);
// Main Component
// Class Component
class Main extends Component {
   addOne = () => {
      this.props.addOne();
   };
   minusOne = () => {
      this.props.minusOne();
   };
   render() {
      const {
         techs,
         greetPeople,
         handleTime,
         changeMode,
         loggedIn,
         handleLogin,
         message,
         country,
         user,
         count,
      } = this.props
      console.log(message);
      const status = loggedIn ? <Welcome /> : <Login />
      return (
         <main>
            <div className='main-wrapper'>               
               <p>Prerequisite to get started react.js:</p>
               <LifeCycles />
               <Constructor />
               <GetDerivedState firstName='Asabeneh' />
               <DidMountMethod />
               <ComponentUpdate/>
               <CallUsingFetch/>
               <BestInput/>
               <p>FORMS:</p>
               <UncontrolledInput/>
               <FirstNameForm />
               <MultipleInputForm />
               <DifferentInputsForm/>
               <ImageGallery />
               <ul>
                  <TechList techs={this.props.techs} />
               </ul>
               <UserCard user={user} />
               {techs.length === 3 && (
                  <p>You have all the prerequisite courses to get started React</p>
               )}
               <div>
                  <Button
                     text='Show Time'
                     onClick={handleTime}
                     style={buttonStyles}
                  />
                  <Button
                     text='Greet People'
                     onClick={greetPeople}
                     style={buttonStyles}
                  />
                  <Button
                     text='Dark Mode'
                     onClick={changeMode}
                     style={buttonStyles}
                  />
                  {!loggedIn && (
                     <p>
                        Please login to access more information about 30 Days Of React
                        challenge
                     </p>
                  )}
               </div>
               <div style={{ margin: 30 }}>
                  <Button
                     text={loggedIn ? 'Logout' : 'Login'}
                     style={buttonStyles}
                     onClick={handleLogin}
                  />
                  <br />
                  {status}
               </div>
               <Message message={message} />
               <Count count={count} addOne={this.addOne} minusOne={this.minusOne} />
               <HexaColor />
               <Country country={country} />
               <Button
                  text='Show Random Country'
                  onClick={this.props.showRandomCountry}
                  style={buttonStyles}
               />
               <Form />
               <MyAlertBox />
               <Events />
               <FormComponent />
               <MouseCoordinateDisplay/>
            </div>
         </main>
      )
   }
}

export default Main