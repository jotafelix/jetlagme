import React from 'react'
import { Link } from 'gatsby'


import headerGuidesStyles from '../styles/headerguides.module.scss'
import logo from "../images/logo-green-1x.png"


const HeaderGuides = () => {

    return(

        <header className={headerGuidesStyles.header}> 
            <div className={headerGuidesStyles.header_nav}>
                <Link to="/"><img src={logo} alt="Logo Jetlag Me" className={headerGuidesStyles.logo} /></Link>
                <nav>
                    <ul className={headerGuidesStyles.navList}>
                        <li><Link className={headerGuidesStyles.navItem} activeClassName={headerGuidesStyles.navItemActive} to="/">Home</Link></li>
                        <li><Link className={headerGuidesStyles.navItem} activeClassName={headerGuidesStyles.navItemActive} to="/about">About</Link></li>
                        <li><Link className={headerGuidesStyles.navItem} activeClassName={headerGuidesStyles.navItemActive} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderGuides