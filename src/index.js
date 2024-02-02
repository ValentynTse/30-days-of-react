import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RoutedApp from './components/router/RoutedApp';
// import App from './App';
import './styles/index.css';

const root = createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
      <RoutedApp />
   </BrowserRouter>);

   // root.render(<App/>)

