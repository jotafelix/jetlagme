import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {

    return (
        <Layout>
            <Head title="About"/>
            <h1>Sobre nosotros</h1>
            <p>Aqui hablaremos sobre nosotros</p>
            <p><Link to='/contact'>Formulario de contacto</Link></p>
        </Layout>
    )
}

export default AboutPage 