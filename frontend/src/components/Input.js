import React from 'react';
import './Input.css';


const Input = ({placeholder, customStyle={}, onChange, value, type="text"}) => {
    return (
        <div className="input-container">
            <input  placeholder={placeholder} style={customStyle} onChange={onChange} value={value} type={type}/>
        </div>
    )
}

export default Input;