import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './Tree';

const options = [
  { parent: 'Fruits', children: ['Banana', 'Orange'] },
  { parent: 'Furniture', children: ['Chair', 'Table'] },
  { parent: 'Weather', children: ['Sunny', 'Cloudy'] },
];

ReactDOM.render(
  <React.StrictMode>
    <Tree options={options} />
  </React.StrictMode>,
  document.getElementById('root')
);
