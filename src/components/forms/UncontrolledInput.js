import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input Value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolledInput">Uncontrolled Input: </label>
      <input type="text" id="uncontrolledInput" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;
