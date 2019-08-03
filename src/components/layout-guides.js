import React from 'react'

import HeaderGuides from './header-guides'
import Footer from './footer'
import '../styles/index.scss'
import layoutGuideStyle from '../styles/layout.module.scss'

const LayoutGuides = (props) => {
    return(
        <div className={layoutGuideStyle.container}>
            <div className={layoutGuideStyle.content}>
                <HeaderGuides />
                <div className={layoutGuideStyle.main_content}>
                {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default LayoutGuides