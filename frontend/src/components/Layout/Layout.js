import classes from './Layout.module.css'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Layout = (props) => {
    return (
        <div>
            <Header />
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
