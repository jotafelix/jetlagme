import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <div className={layoutStyles.main_content}>
                {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Layout