import React from 'react';
import './Input.css';


const Input = ({placeholder, customStyle={}, onChange, value}) => {
    return (
        <div className="input-container">
            <input  placeholder={placeholder} style={customStyle} onChange={onChange} value={value}/>
        </div>
    )
}

export default Input;