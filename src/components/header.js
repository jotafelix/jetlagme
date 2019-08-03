import React from 'react'
import { Link } from 'gatsby'
import { css } from "@emotion/core"


import headerStyles from '../styles/header.module.scss'
import logo from "../images/logo-green-1x.png"
import backgroundPath from "../images/hero.jpg"

const Header = () => {

    return(

        <header className={headerStyles.header} css={css`
            background-image: url(${backgroundPath});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        
        `}> 
            <div className={headerStyles.header_nav}>
                <Link to="/"><img src={logo} alt="Logo Jetlag Me" className={headerStyles.logo} /></Link>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/">Home</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/about">About</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={headerStyles.header_text}>
                <h2 className={headerStyles.header_text_main}>Today is the day to travel</h2>
                <p className={headerStyles.header_text_second}>Check out our travel Guides ></p>

            </div>
        </header>
    )
}

export default Header