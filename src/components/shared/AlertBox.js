import React from "react";
const AlertBox = ({ type, message }) => {
   return (
      <div className={`alert-box ${type}`}>
         <p>{message}</p>
      </div>
   );
};

export default AlertBox;