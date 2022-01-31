import classes from './Dashboard.module.css'
import React from 'react'
import Button from '../components/Layout/Button'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Dashboard = () => {
    const history=useHistory();
    const data=useSelector(state=>state.postReducer);

    const deletePostHandler=async(id)=>{
       await axios.delete(`/remove/${id}`);
        history.push('/dashboard');
    }

    
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
                        <Button onClick={()=>deletePostHandler(_id)}>Delete</Button>
                    </div>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default Dashboard
