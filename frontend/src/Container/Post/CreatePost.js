import classes from './CreatePost.module.css'
import React, { useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import Button from '../../components/Layout/Button'
import axios from 'axios'

const CreatePost = () => {
  const titleRef=useRef();
  const imageRef=useRef();
 const [category,setDesc]=useState('');
  const descRef=useRef();

  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    const title=titleRef.current.value;
    const image=imageRef.current.value;
    const desc=descRef.current.value;

    const res=await axios({
        method:"POST",
        url:"/upload",
        data:{
            title:"title",
            desc:"desc",
            image:image,
            category:"category"
        },
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });


    console.log(res.data);

    alert("done")
  }
    return (
        <form className={classes['create-post']} onSubmit={onSubmitHandler}>
            <div className={classes.title}>
                <FaPlus className={classes['title-icon']} />
                <input ref={titleRef} type="text" placeholder="Enter the title here ....."/>
            </div>
            <div className={classes.image}>
                <img src="https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/stock_market_031521.jpg?itok=FlOOokap" alt=""/>
                <input ref={imageRef} type="file" />
            </div>
            <div className={classes.category}>
                <label htmlFor="category">Category:</label>
               <select value={category} onChange={(e)=>setDesc(e.target.value)}>
                   <option  value="html">Html</option>
                   <option  value="css">Css</option>
                   <option value="js">JS</option>
               </select>
            </div>
            <div className={classes.paragraph}>
              <FaPlus className={classes['title-icon']} />
                <textarea ref={descRef} rows="5" ></textarea>
            </div>
            
            <Button className={classes.publish}>Publish</Button>

        </form>
    )
}

export default CreatePost
