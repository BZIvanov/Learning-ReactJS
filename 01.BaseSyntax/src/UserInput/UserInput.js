import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    // for multiline return expression put everything in round brackets
    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />;
};

export default UserInput;