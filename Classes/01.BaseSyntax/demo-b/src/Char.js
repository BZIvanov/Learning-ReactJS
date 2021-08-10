import React from 'react';

const styles = {
  display: 'inline-block',
  padding: '12px',
  margin: '12px',
  border: '1px solid black',
  textAlign: 'center',
};

const Char = (props) => {
  return (
    <div style={styles} onClick={props.onCharClick}>
      {props.character}
    </div>
  );
};

export default Char;
