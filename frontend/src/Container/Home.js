import classes from './Home.module.css'
import React, { useState,useEffect } from 'react'
import HomeLeft from '../components/Home/HomeLeft'
import HomeRight from '../components/Home/HomeRight'
import Post from '../components/Post/Post'
import { FaBars, FaTimes } from 'react-icons/fa'
import axios from 'axios'
const Home = () => {
    const [show ,setShow]=useState(window.innerWidth >=768);
    const [data,setData]=useState([]);
   
   const onLeftbarHander=()=>{
       setShow(!show);
   };
   useEffect(()=>{
      
       const fetchData=async()=>{
           const res=await axios.get('/all-post');
           setData(res.data);
       }
       fetchData();
   },[])

    return (
        <div className={classes.home}>
        <button onClick={onLeftbarHander}  className={classes.leftbar}>{!show ? <FaBars /> : <FaTimes/>}</button>
       {show  && <HomeLeft  /> }
             
            <main className={classes['home-posts']}>
                {
                    data.map((item)=>{
                       const {_id}=item;
                        return(
                         <Post key={_id} item={item} id={_id} />
                        )
                    })
                }
            </main>
            <HomeRight />
        </div>
    )
}

export default Home;


