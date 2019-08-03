import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from "@emotion/core"

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from '../styles/index.module.scss'

import { IoMdGlobe } from 'react-icons/io';
import { IoMdPaperPlane } from 'react-icons/io';
import { IoMdMap } from 'react-icons/io';

const IndexPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulGuidePost ( sort: { fields:publishedDate, order:DESC } ) {
                edges {
                    node {
                        title
                        country
                        author
                        slug
                        publishedDate (formatString:"MMMM Do, YYYY")
                        heroimage {
                            fluid(maxWidth: 1920, maxHeight: 1080, resizingBehavior: CROP) {
                              src
                            }
                        }
                        country
                        author
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Home" />
            <main>
                <section className={indexStyles.section_about}>
                    <h2 className={indexStyles.heading_secundary}>Explore the world with JetLag Me</h2>
                    <span className={indexStyles.heading_line} ></span>
                </section>

                <section className={indexStyles.section_features}>
                    <div className={indexStyles.feature_box}>
                        <IoMdGlobe className={indexStyles.feature_box__icon} />
                        <h3 className={indexStyles.heading_tertiary}>Explore the world</h3>
                        <p className={indexStyles.feature_box__text}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo sint excepturi.
                        </p>
                    </div>

                    <div className={indexStyles.feature_box}>
                        <IoMdPaperPlane className={indexStyles.feature_box__icon} />
                        <h3 className={indexStyles.heading_tertiary}>Explore the world</h3>
                        <p className={indexStyles.feature_box__text}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo sint excepturi.
                        </p>
                    </div>

                    <div className={indexStyles.feature_box}>
                        <IoMdMap className={indexStyles.feature_box__icon} />
                        <h3 className={indexStyles.heading_tertiary}>Explore the world</h3>
                        <p className={indexStyles.feature_box__text}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo sint excepturi.
                        </p>
                    </div>

                </section>


                <section className={indexStyles.section_travel_guides}>
                    <h2 className={indexStyles.heading_secundary}>Our Travel Guides</h2>
                    <span className={indexStyles.heading_line} ></span>
                    <div className={indexStyles.section_posts}>
                        <ol className={indexStyles.posts}>
                            {data.allContentfulGuidePost.edges.map((edge) => {
                                return (

                                    <div className={indexStyles.blog_card} css={css`
                                    background-image: url(${edge.node.heroimage.fluid.src});
                                    background-repeat: no-repeat;
                                    background-size: cover;
                                    background-position: center;
                                
                                    `}>
                                        <div className={indexStyles.title_content}>
                                            <h3>{edge.node.title}</h3>
                                            <hr />
                                            <div className={indexStyles.intro}>{edge.node.country}</div>
                                        </div>

                                        <div className={indexStyles.card_info}>
                                        <Link to={`/travelguide/${edge.node.slug}`}>Read more</Link> 
                                        </div>

                                        <div className={indexStyles.utility_info}>
                                            <ul className={indexStyles.utility_list}>
                                            <li className={indexStyles.comments}>12</li>
                                            <li className={indexStyles.date}>{edge.node.publishedDate}</li>
                                            </ul>
                                        </div>

                                        <div className={indexStyles.gradient_overlay}></div>
                                        <div className={indexStyles.color_overlay}></div>
                                    </div>


                                   
                                )
                            })}
                        </ol>
                    </div>
                </section>
                
            </main>
        </Layout>
    )


}

export default IndexPage
