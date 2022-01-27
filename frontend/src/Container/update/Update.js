import classes from './Update.module.css'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Button from '../../components/Layout/Button'

const Update = () => {
    return (
        <form className={classes['create-post']}>
            <div className={classes.title}>
                <FaPlus className={classes['title-icon']} />
                <input type="text" placeholder="Enter the title here ....."/>
            </div>
            <div className={classes.image}>
                <img src="https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/stock_market_031521.jpg?itok=FlOOokap" alt=""/>
                <input type="file" />
            </div>
            <div className={classes.category}>
                <label htmlFor="category">Category:</label>
               <select>
                   <option>Html</option>
                   <option>Css</option>
                   <option>JS</option>
               </select>
            </div>
            <div className={classes.paragraph}>
              <FaPlus className={classes['title-icon']} />
                <textarea rows="5" ></textarea>
            </div>
            <div className={classes.paragraph}>
              <FaPlus className={classes['title-icon']} />
                <textarea rows="5" ></textarea>
            </div>
            <div className={classes.paragraph}>
              <FaPlus className={classes['title-icon']} />
                <textarea rows="5" ></textarea>
            </div>
        
            <div className={classes.paragraph}>
              <FaPlus className={classes['title-icon']} />
                <textarea rows="5" ></textarea>
            </div>
            <div className={classes.paragraph}>
              <FaPlus className={classes['title-icon']} />
                <textarea rows="5" ></textarea>
            </div>
            <Button className={classes.publish}>Update</Button>

        </form>
    )
}

export default Update;
