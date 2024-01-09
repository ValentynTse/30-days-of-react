import React from 'react';
import { createRoot } from 'react-dom/client';

import { MyForm } from './js/modules/form';
import asabenehImage from './images/asabeneh.jpg';
import htmlImg from './images/html_logo.png';
import cssImg from './images/css_logo.png';
import jsImg from './images/js_logo.png';
import reactImg from './images/react_logo.png';

// JSX element, header
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const date = 'Oct 2, 2023'

// JSX element, header
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          Instructor: {props.firstName} {props.lastName}
        </p>
        <small>Date: {props.date}</small>
      </div>
    </header>
  )
};

const firstName = 'Asabeneh '
const lastName = 'Yetayeh'
let yearBorn = 1971
let currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
let status = age >= 18

const PersonAge = (props) => (
  <p>
    {' '}
    {props.firstName} {props.lastName} is {props.age} years old
  </p>
)

const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Congrat = () => {
  const sayHi = () => {
    alert('Hi')
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  return (
    <div className='app'>
      <Button text='Say Hi' onClick={sayHi} />
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Say Hi' onClick={() => alert('HI')} />
      <Button text='Show Time' onClick={() => alert(new Date())} />
    </div>
  )
}

// JSX element, main
// const techs = ['HTML', 'CSS', 'JavaScript']
// const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const Skills = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>)
  return <ul>{skillList}</ul>
}

const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)
const ImageGallery = () => {
  return (
    <div>
      <h2>Front End Technologies</h2>
      <div className="image-container">
        <img src={htmlImg} alt="HTML" />
        <img src={cssImg} alt="CSS" />
        <img src={jsImg} alt="JS" />
        <img src={reactImg} alt="React" />
      </div>
    </div>
  );
};

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

const showDate = (time) => {
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
  return ` ${month}, ${date}, ${year}`
}

// JSX element, main
const data = {
  copyright: 'Copyright ',
  year: ' 2023',
  date: new Date(),
}
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
      {/* <ul>{techsFormatted}</ul> */}
      <Skills
        skills={['HTML', 'CSS', 'JavaScript']}
      />
      <ul className='tech__logos'>{logosFormatted}</ul>
      <ImageGallery />
      <UserCard />
      <PersonAge
        firstName={firstName}
        lastName={lastName}
        age={age}
      />
      <Status
        status={status}
      />
      <MyForm />
      <Congrat />
    </div>
  </main>
)
// JSX element, footer
const Footer = (props) => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <small>{showDate(props.data.date)}</small>
        <p>
          {props.data.copyright}
          {props.data.year}
        </p>
      </div>
    </footer>
  )
}

// JSX element, app
const App = () => (
  <div className='app'>
    <Header
      welcome='Welcome to 30 Days Of React'
      title='Getting Started React'
      subtitle='JavaScript Library'
      firstName='Asabeneh'
      lastName='Yetayeh'
      date={'Oct 4, 2020'}
    />
    <Main />
    <Footer
      data={data}
    />
  </div>
)

const root = createRoot(document.getElementById('root'));

root.render(<App />);