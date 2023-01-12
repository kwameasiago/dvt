import React from 'react';
import './Button.css'

const Button = ({onClickEvent, content, customeStyle={}}) => {
    return (
        <button 
        onClick={onClickEvent}
        style={customeStyle}
        >
            {content}
        </button>
    )
}

export default Button