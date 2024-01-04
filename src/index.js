import React from 'react';
import { createRoot } from 'react-dom/client';

import { MyForm } from './js/modules/form';

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

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const yearBorn = 1971
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)


const user = (
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

const form = MyForm();
// JSX element, main
const main = (
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
      {user}
      {personAge}
      {form}
    </div>
  </main>
)

const copyRight = 'Copyright 2023'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)
const root = createRoot(document.getElementById('root'));

root.render(app);