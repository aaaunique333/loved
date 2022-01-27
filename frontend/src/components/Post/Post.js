import classes from './Post.module.css'
import React from 'react'
import Card from '../Layout/Card'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Post = (props) => {
    const {title,image,desc,createdAt,category}=props.item;
    const id=props.id;
    

    return (
        <Card className={classes.post}>
            <div className={classes['post-image-desc']}>
            <Link to={`/post-view/${id}`}><img className={classes.image} src={image} alt=""/></Link>
                <div className={classes.desc}>
                <Link to={`/post-view/${id}`}><h2>{title}</h2> </Link>
                    <p>
                       {desc}
                    </p>
                </div>
            </div>
            <div className={classes['post-control']}>
                <p>{category}</p>
                <p>{new Date(createdAt).toDateString()}</p>
                <Link to={`/post-view/${id}`}><button><FaArrowAltCircleRight /> </button></Link>
            </div>
        </Card>
    )
}

export default Post
