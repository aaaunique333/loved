import classes from './Dashboard.module.css'
import React from 'react'
import Button from '../components/Layout/Button'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
        {[0,1,2,3,4,5,6].map((item)=>{
            return(
                <div className={classes.dashboard}>
                <img src="https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/stock_market_031521.jpg?itok=FlOOokap" alt=""/>
                <div className={classes['dash-control']}>
                    <h3>Css animation and Vishal potinda</h3>
                    <div className={classes.button}>
                        <Button><Link to="/update" >Edit</Link></Button>
                        <Button>Delete</Button>
                    </div>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default Dashboard
