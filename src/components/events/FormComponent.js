import React, { Component } from 'react';
import InputComponent from './InputComponent';

class FormComponent extends Component {
   state = {
      inputValue: '',
   };

   handleInputChange = (event) => {
      this.setState({ inputValue: event.target.value });
      console.log('Input value changed:', event.target.value);
   };
   handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted!');
      // Additional logic for form submission can be added here
   };
   
   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            {/* Form content goes here */}
            <InputComponent
               onChange={this.handleInputChange}
               value={this.state.inputValue}
            />
            <br/>
            <button type="submit">Submit</button>
         </form>
      );
   }
}

export default FormComponent;
