import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

import footerStyles from '../styles/footer.module.scss'
import logoGatsby from '../images/gatsby_logo.svg'
import logoContentful from '../images/contentful.svg'
import logoGraphql from '../images/graphql.svg'
import logo from "../images/logo-jetlagme.svg"

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    
    `)

    return(
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footer_box}>

                <Link to="/"><img src={logo} alt="Logo Jetlag Me" className={footerStyles.logo}/></Link>

                <p>Crafted by <a href="https://www.felixgonzalo.com" target="_blank" rel="noopener noreferrer">{data.site.siteMetadata.author}</a>, © 2019</p>

                <div className={footerStyles.footer_logos}>
                    
                    <span>
                        Powered by 
                    </span>
                    <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
                        <img alt="Gatsby" src={logoGatsby}/>
                    </a>
                    <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">
                        <img alt="Contentful" src={logoContentful}/>
                    </a>

                    <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
                        <img alt="Graphql" src={logoGraphql}/>
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer