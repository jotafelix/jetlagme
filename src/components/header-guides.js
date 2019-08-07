import React from 'react'
import { css } from "@emotion/core"

import headerGuidesStyles from '../styles/headerguides.module.scss'
import Navbar from '../components/navbar'


const HeaderGuides = () => {

    return(

        
        <header className={headerGuidesStyles.header} css={css`
        background: linear-gradient(45deg, rgb(38, 44, 65) 0%, rgb(70, 80, 122) 100%);
    
        `}> 
            <Navbar />
        </header>
    )
}

export default HeaderGuides