import React from 'react';
import { createRoot } from 'react-dom/client';

import { Form } from './js/modules/form';
import { InputField } from './js/modules/form';
import AlertBox from './js/modules/form';
import Button from './js/modules/button';

import asabenehImage from './images/asabeneh.jpg';
import htmlImg from './images/html_logo.png';
import cssImg from './images/css_logo.png';
import jsImg from './images/js_logo.png';
import reactImg from './images/react_logo.png';

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2023'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {author.firstName} {author.lastName}</p>
      <small>{date}</small>
    </div>
  </header>
)

const yearBorn = 1971
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const PersonAge = () => (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const User = () => (
  <div className='user__image'>
    <img src={asabenehImage} alt='asabeneh' />
  </div>
)

const htmlLogo = (
  <div>
    <img src={htmlImg} alt='HTML' />
  </div>
)
const cssLogo = (
  <div>
    <img src={cssImg} alt='CSS' />
  </div>
)
const jsLogo = (
  <div>
    <img src={jsImg} alt='JavaScript' />
  </div>
)
const reactLogo = (
  <div>
    <img src={reactImg} alt='React' />
  </div>
)
const logos = [htmlLogo, cssLogo, jsLogo, reactLogo]
const logosFormatted = logos.map((logo) => <li key={logo}>{logo}</li>)

const myInputFieldStyle = {
  marginTop: 40,
  padding: '10px 20px',
  background: '#eee',
  border: 'none',
  borderRadius: 5,
}

const MyInputField = () => {
  return (
    <div>
      <InputField
        style={myInputFieldStyle}
        id="firstName"
        label="First Name:"
        type="text"
        placeholder="Enter your first name"
      />
    </div>
  );
};

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const bgColor = hexaColor();
const rectangleStyle = {
  padding: '10px',
  width: '100%',
  height: '40px',
  marginTop: '40px',
  marginBottom: '40px',
  backgroundColor: bgColor,
  border: '1px solid #000',
};
const HexaColorLine = () => {
  return <div style={rectangleStyle}>{hexaColor()}</div>
}

const buttonStyles = {
  marginTop: 40,
  marginBottom:40,
  padding: '10px 20px',
  background: 'rgb(0, 255, 0',
  border: 'none',
  borderRadius: 5,
}
const MyButton = () => {
  return (
    <div>
      <Button style={buttonStyles}>action</Button>
    </div>
  )
}

const MyAlertBox = () => {
  return (
    <div>
      <AlertBox type="warning" message="This is a warning message!" />
      <AlertBox type="success" message="This is a success message!" />
    </div>
  );
}

// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      <ul className='tech__logos'>{logosFormatted}</ul>
      <User />
      <PersonAge />
      <MyInputField />
      <MyButton />
      <MyAlertBox/>
      <HexaColorLine />
      <Form />
    </div>
  </main>
)

const copyRight = 'Copyright 2023'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)



// JSX element, app
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)
const root = createRoot(document.getElementById('root'));

root.render(<App />);
// root.render(React.createElement(App));