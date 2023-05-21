import React from "react";

// State is a built-in React object that is used to contain data or information about the component. 

const Intro = (props) => (
    <p className='App-intro'>
      {props.message} 
      {/* rendering messages through custom properties */}
    </p>
  );

  export default Intro;