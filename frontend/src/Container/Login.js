import classes from './Login.module.css'
import React, {  useRef } from 'react'
import Button from '../components/Layout/Button'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Actions/login';

const Login = () => {
    const dispath=useDispatch();
    const history=useHistory();
    const usernameRef=useRef();
    const passwordRef=useRef();
  
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const username=usernameRef.current.value;
        const password=passwordRef.current.value;

         const res=await axios({
                method: 'post',
                url: '/login',
                data: {
                  username,
                  password
                }
              });
        
        if(username===res.data.username){
            dispath(login());
            localStorage.setItem('login',1);
           history.push("/control");
        }
}  
         

    return (
        <div className={classes['login-main']}>
            <form className={classes.login} onSubmit={onSubmitHandler}>
            <h1>Admin Login</h1>
            <input ref={usernameRef} type="text" placeholder="Username"/>
            <input ref={passwordRef} type="password" placeholder="Password"/>
            <Button>Login</Button>
            </form>
        </div>
    )
}

export default Login
