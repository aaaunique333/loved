import classes from './Menu.module.css'
import React from 'react'
import 'animate.css'
const Menu = (props) => {
    const onCancelHander=()=>{
        props.onCancel();
    }
    return (
        <div  className={`${classes.menu}`}>
            <div className={classes['menu-api']}>
                <button>All</button>
                <button>FrontEnd</button>
                <button>Backend</button>
            </div>
            <button onClick={onCancelHander} className={classes.cancel}>x</button>
        </div>
    )
}

export default Menu
