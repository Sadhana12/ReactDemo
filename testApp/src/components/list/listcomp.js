import React from 'react';

const ListComponent = (props) => {

  return (

    <div className="Component" key={props.key}>

      <div>{props.text}</div>

    </div>

  );

};

export { ListComponent };