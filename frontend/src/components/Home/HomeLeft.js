import classes from './HomeLeft.module.css'
import React from 'react'
import {  NavLink } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { category } from '../../Actions/post'
const HomeLeft = () => {
     const dispatch = useDispatch();
     const onCategoryHandler=async(cat)=>{
       const res=await axios.get("/all-post");
        dispatch(category(res.data,cat));
    }
    return (
        <div className={classes['home-left']}>
            <ul>
                <li>
                 <button onClick={()=>onCategoryHandler("HTML")}><a activeClassName={classes.active} >HTML</a></button>
                </li>
                <li>
                <button onClick={()=>onCategoryHandler("CSS")}><NavLink activeClassName={classes.active} to="/" >CSS</NavLink></button>
                </li>
                <li>
                <button onClick={()=>onCategoryHandler("c++")}><NavLink activeClassName={classes.active} to="/" >JAVASCRIPT</NavLink></button>
                </li>
                
            </ul>
        </div>
    )
}

export default HomeLeft
