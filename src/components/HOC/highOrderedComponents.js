import React, { Component } from 'react';

const withInputHandling = (WrappedComponent, type) => {
   return class extends Component {
      constructor(props) {
         super(props);
         this.state = {
            value: '',
         };
      }

      handleChange = (event) => {
         this.setState({ value: event.target.value });
      };

      handleType = (value) => {
         switch (type) {
            case 'text':
               return value;
            case 'number':
               return parseFloat(value) || '';
            case 'date':
               return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : '';
            case 'time':
               return /^\d{2}:\d{2}$/.test(value) ? value : '';
            default:
               return value;
         }
      };

      render() {
         return (
            <WrappedComponent
               {...this.props}
               value={this.state.value}
               type={type}
               onChange={(e) => this.handleChange(e, this.handleType(e.target.value))}
            />
         );
      }
   };
};

// Example input component
const InputComponent = ({ value, type, onChange }) => {
   return (
      <input
         type={type}
         value={value}
         onChange={(e) => onChange(e, value)}
      />
   );
};

// Usage of the HOC with different types
const TextInput = withInputHandling(InputComponent, 'text');
const NumberInput = withInputHandling(InputComponent, 'number');
const DateInput = withInputHandling(InputComponent, 'date');
const TimeInput = withInputHandling(InputComponent, 'time');

// Using the enhanced input components in a parent component
class BestInput extends Component {
   render() {
      return (
         <div className='best__inputs'>
            <h4>Best Inputs</h4>
            <TextInput />
            <NumberInput />
            <DateInput />
            <TimeInput />            
         </div>
      );
   }
}

export default BestInput;


