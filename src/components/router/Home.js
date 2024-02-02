import React from 'react';
import { useNavigate } from 'react-router-dom';

// Home component
const Home = () => {
   const navigate = useNavigate()
   return (
      <>
         <h1>Welcome Home</h1>
         <button onClick={() => navigate('order-summary', { replace: true })}>
            Place order
         </button>
      </>
   )
}

export default Home;