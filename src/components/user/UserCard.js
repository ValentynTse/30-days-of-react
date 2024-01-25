import React, {Component} from "react";

// User Card Component
class UserCard extends Component{
   render() {
      const { user: { firstName, lastName, image } } = this.props;
      return (
         <div className='user-card'>
            <img src={image} alt={firstName} />
            <h2>
               {firstName}
               {lastName}
            </h2>
         </div>
      );
   }
} 

export default UserCard;