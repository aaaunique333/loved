import classes from './SingleView.module.css'
import React from 'react'

const SingleView = (props) => {
    const {title,image,category,createdAt,desc}=props.post;

    return (
        <div className={classes['single-view']}>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <div className={classes.info}>
                <p>{category}</p>
                <p>{new Date(createdAt).toDateString()}</p>
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default SingleView
