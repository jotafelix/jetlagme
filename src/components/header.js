import React from 'react'
import { css } from "@emotion/core"

import headerStyles from '../styles/header.module.scss'
import Navbar from '../components/navbar'

import backgroundPath from "../images/background.jpg"

const Header = () => {

    return(

        
        <header className={headerStyles.header} css={css`
            background-image: url(${backgroundPath});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        
        `}> 
            <Navbar />
            <div className={headerStyles.header_text}>
                <h2 className={headerStyles.header_text_main}>Today is the day to travel</h2>
                <a href="#travelguides" className={headerStyles.header_text_second}>Check out our travel Guides &rarr;</a>
                

            </div>
        </header>
    )
}

export default Header