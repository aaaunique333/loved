import classes from './HomeLeft.module.css'
import React from 'react'
import {  NavLink } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {post} from '../../Actions/post'
const HomeLeft = () => {
     const dispatch = useDispatch();
    const onCategoryHandler=async(category)=>{
       const res=await axios.get("/all-post");
        const data=res.data;
        dispatch(post(data,category));
        console.log(data,category);
        
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
