import classes from './HomeLeft.module.css'
import React from 'react'
import {  NavLink } from 'react-router-dom'
import axios from 'axios'

const HomeLeft = () => {
    const onCategoryHandler=async(cat)=>{
       const res=await axios({
           method:"POST",
           url:"/all-post",
           data:{
               category:cat
           },
           

       });
       console.log(res);
    }
    return (
        <div className={classes['home-left']}>
            <ul>
                <li>
                 <button onClick={()=>onCategoryHandler("HTML")}><a activeClassName={classes.active} >HTML</a></button>
                </li>
                <li>
                <button onClick={()=>onCategoryHandler(15)}><NavLink activeClassName={classes.active} to="/" >CSS</NavLink></button>
                </li>
                <li>
                <button onClick={()=>onCategoryHandler(17)}><NavLink activeClassName={classes.active} to="/" >JAVASCRIPT</NavLink></button>
                </li>
                
            </ul>
        </div>
    )
}

export default HomeLeft
