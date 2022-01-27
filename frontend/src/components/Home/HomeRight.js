import classes from './HomeRight.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeRight = () => {
    return (
        <div className={classes['home-right']}>
            <h3>Realated posts</h3>
            <ul>
                <li>
                    <Link>Login form in php.</Link>
                </li>
                <li>
                    <Link>Animation in javascript.</Link>
                </li>
                <li>
                    <Link>User attration and beaty,</Link>
                </li>
                <li>
                    <Link>Dashboad in css</Link>
                </li>
                <li>
                    <Link>Login panel in Js</Link>
                </li>
                <li>
                    <Link>Games in JS</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomeRight
