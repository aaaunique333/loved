import classes from './Button.module.css'
import React from 'react'

const Button = (props) => {
    return (
        <button 
        className={`${classes.button} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button
