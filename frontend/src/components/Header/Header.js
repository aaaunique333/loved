import classes from './Header.module.css'
import React, { useState } from 'react'
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Actions/login';
import { post } from '../../Actions/post';

const Header = () => {
    const dispath=useDispatch();
    const isLogged=useSelector(state=>state.loginReducer.isLogged);
    const [toggle,setToggle]=useState(false);

    const onBarHandler=()=>{
        setToggle(!toggle);

    }
    const onCancelHandler=()=>{
        setToggle(false);
    }
    const onLogoutHander=()=>{
        dispath(logout());
        localStorage.removeItem("login");
    }
    return (
        <header className={classes.header}>
               {toggle && <Menu  onCancel={onCancelHandler} />}
                <div className={classes['logo-bars']}>
                    <button className={classes.bars} onClick={onBarHandler}><FaBars  /></button>
                 <Link to="/"><img className={classes.logo} src="https://www.startcode.dev/content/images/startcode.dev/logo.svg" alt=""/></Link>
                </div>
                <ApiCall />
                <div className={classes['header-search']}>
                    <div className={classes.searchinput}><input type="search" placeholder="Search blog"/>
                    <button className={classes['search-btn']}><FaSearch/></button></div>
                  {isLogged && <button onClick={onLogoutHander} className={classes.logout} ><FaUser className={classes.login} /></button>}
                </div>
        </header>
    )
}

export default Header

export const ApiCall=()=>{
  
    return(
           <div className={classes['header-api']}>
                <button>All</button>
                <button>FrontEnd</button>
                <button>Backend</button>
            </div>
    )
}