import { useEffect, useState } from 'react'
import HomeLeft from '../components/Home/HomeLeft'
import classes from './PostView.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import HomeRight from '../components/Home/HomeRight'
import SingleView from '../components/SingleView/SingleView'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const PostView = () => {
    const params=useParams();
    const [show ,setShow]=useState(window.innerWidth >=768);
    const [post,setPost]=useState({});
    
    const onShowHadler=()=>{
        setShow(!show);
    }
     useEffect(()=>{
       const fetchData=async()=>{
           const res=await axios.get(`/post-view/${params.id}`);
           console.log(res.data);
           setPost(res.data);
       }
       fetchData();
     },[params])
    return (
        <div className={classes['post-view']}>
            <button onClick={onShowHadler} className={classes.showBtn}>{!show ? <FaBars /> : <FaTimes/>}</button>
           { show && <HomeLeft />}
            <SingleView post={post}   />
           <HomeRight />
        </div>
    )
}

export default PostView
