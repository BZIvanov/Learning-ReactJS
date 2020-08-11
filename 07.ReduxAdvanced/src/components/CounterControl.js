import React from 'react';

const CounterControl = (props) => (
  <div className="CounterControl" onClick={props.clicked}>
    {props.label}
  </div>
);

export default CounterControl;
