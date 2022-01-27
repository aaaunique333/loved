import classes from './Control.module.css'
import React from 'react'
import Button from '../../components/Layout/Button'
import { Link } from 'react-router-dom'

const Control = () => {
    return (
        <div className={classes.control}>
          <Button><Link to="/upload" >Create new Post</Link></Button>
            <Button><Link to="/dashboard">Dashboard</Link></Button>
        </div>
    )
}

export default Control
