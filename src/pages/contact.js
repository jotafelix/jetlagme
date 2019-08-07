import React from 'react'

import LayoutGuides from '../components/layout-guides'
import Head from '../components/head'
import headerGuidesStyles from '../styles/headerguides.module.scss'
import ContactStyles from '../styles/contact.module.scss'

import { IoLogoGithub } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import { FaLaptop } from 'react-icons/fa';

const ContactPage = () => {

    return(

        <LayoutGuides>
            <Head title="Contact"/>
            <div className={headerGuidesStyles.header_text}>
                <h1 className={headerGuidesStyles.header_text_main}>Contact</h1>
                <p className={headerGuidesStyles.header_text_second}>we are happy to hear from you!</p>
            </div>

            <section className={ContactStyles.main}>
                <div className={ContactStyles.header_text}>
                    <h2>Jetlag Me aims to improve your travel experience. Let us know if you need help with your trip!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>

                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <label>Name</label>
                    <input className={ContactStyles.form_style} name="name" placeholder="Name" type="text" />

                    <label>Last name</label>
                    <input className={ContactStyles.form_style} name="lastname" placeholder="Last name" type="text" />

                    <label>Email</label>
                    <input className={ContactStyles.form_style} name="email" placeholder="Email" type="email" />

                    <label>Message</label>
                    <textarea className={ContactStyles.form_style} name="message" placeholder="Leave your message..."/>

                    <button type="submit">Send</button>
                </form>
            </section>

            <section className={ContactStyles.section_social}>
                    <div className={`${ContactStyles.social_box} ${ContactStyles.github}`}>
                        <a href="https://www.github.com/jotafelix" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className={ContactStyles.social_box__icon}  />
                        <h3>GitHub</h3>
                        </a>
                    </div>

                    <div className={`${ContactStyles.social_box} ${ContactStyles.instagram}`}>
                        <a href="https://www.instagram.com/jotafelix8" target="_blank" rel="noopener noreferrer">
                        <IoLogoInstagram className={ContactStyles.social_box__icon} />
                        <h3>Instagram</h3>
                        </a>
                    </div>

                    <div className={`${ContactStyles.social_box} ${ContactStyles.personal_site}`}>
                        <a href="https://www.felixgonzalo.com" target="_blank" rel="noopener noreferrer">  
                        <FaLaptop className={ContactStyles.social_box__icon} />
                        <h3>Personal site</h3>
                        </a>
                    </div>

                </section>
        </LayoutGuides>
        
    )
}

export default ContactPage