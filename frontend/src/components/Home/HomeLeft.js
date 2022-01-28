import classes from './HomeLeft.module.css'
import React from 'react'
import {  NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { category, post } from '../../Actions/post'
const HomeLeft = () => {
    
     const dispatch = useDispatch();
    const history=useHistory();

     const onCategoryHandler=async(cat)=>{
     const res=await axios.get("/all-post");
       if(cat==="ALL"){
            dispatch(post(res.data));
            history.push("/");

       }else{

           dispatch(category(res.data,cat));
           history.push("/");

       }
    }
    return (
        <div className={classes['home-left']}>
            <ul>
              <li>
                 <button onClick={()=>onCategoryHandler("ALL")}><a activeClassName={classes.active} >ALL</a></button>
                </li>
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
