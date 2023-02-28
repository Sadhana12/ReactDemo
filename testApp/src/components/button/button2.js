
import React from 'react';

const Button2 = (props) => {

  return (

    <button className="Button2" onClick={props.onClick}>{props.text}</button>

  );

}

export { Button2 };