import classes from './Update.module.css'
import { FaPlus } from 'react-icons/fa'
import Button from '../../components/Layout/Button'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Update = () => { 
  const history=useHistory();
  const {id}=useParams();
  const [title ,setTitle]=useState();
  const [desc ,setDesc]=useState();
  const [category,setCategory]=useState();

  const onUpdateHandler=async()=>{
    
    const res=await axios({
      method:"PUT",
      url:`/update/${id}`,
      data:{
        title,desc,category
      }
    });

    
    history.push('/dashboard');
    console.log(res);

  }

  

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios.put(`/update/${id}`);
      console.log(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCategory(res.data.category);   
    }
    fetchData();

  },[]);
    return (
        <form className={classes['create-post']} onSubmit={onUpdateHandler}>
            <div className={classes.title}>
                <FaPlus className={classes['title-icon']} />
                <input value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Enter the title here ....."/>
            </div>
            <div className={classes.image}>
                <img src="https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/stock_market_031521.jpg?itok=FlOOokap" alt=""/>
                <input type="file" />
            </div>
            <div className={classes.category}>
                <label htmlFor="category">Category:</label>
               <select value={category} onChange={e=>setCategory(e.target.value)}>
                   <option value="HTML">Html</option>
                   <option value="CSS">Css</option>
                   <option value="JS">JS</option>
               </select>
            </div>
            <div className={classes.paragraph}>
              <FaPlus className={classes['title-icon']} />
                <textarea value={desc} onChange={e=>setDesc(e.target.value)}  rows="5" ></textarea>
            </div>
            
            
            <Button className={classes.publish}>Update</Button>

        </form>
    )
}

export default Update;
