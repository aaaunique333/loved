import classes from './Dashboard.module.css'
import React from 'react'
import Button from '../components/Layout/Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const data=useSelector(state=>state.postReducer);
    return (
        <>
        {data.map((item)=>{
            const {image,title ,_id}=item;
            return(
                <div className={classes.dashboard}>
                <img src={image} alt=""/>
                <div className={classes['dash-control']}>
                    <h3>{title}</h3>
                    <div className={classes.button}>
                        <Button><Link to={`/update/${_id}`} >Edit</Link></Button>
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
