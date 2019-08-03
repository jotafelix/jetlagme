import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Img from 'react-image'
import { css } from "@emotion/core"
import { Link } from 'gatsby'

import LayoutGuides from '../components/layout-guides'
import Head from '../components/head'
import layoutGuideStyle from '../styles/layoutguides.module.scss'



export const query = graphql`
  query($slug: String!) {
    contentfulGuidePost(slug: { eq: $slug }) {
      title
      country
      author
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      summary{
        json
      }
      heroimage {
        fluid(maxWidth: 1200, maxHeight: 725, resizingBehavior: CROP) {
          src
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
        "embedded-asset-block": (node) => {
            const alt = node.data.target.fields.title['en-US']
            const url = node.data.target.fields.file['en-US'].url
            return <img alt={alt} src={url}/>
        }
    }
  }
  let disqusConfig = {
    title: props.data.contentfulGuidePost.title,
  }

  return (
    <LayoutGuides>
      <Head title={props.data.contentfulGuidePost.title}/>
  
      <div className={layoutGuideStyle.post_linking}><Link to="/">JetLag Me</Link> » <span className={props.data.contentfulGuidePost.post_title_text}>
      {props.data.contentfulGuidePost.title} </span> 
      </div>

      <div className={layoutGuideStyle.post_img}>
        <Img src={props.data.contentfulGuidePost.heroimage.fluid.src} alt="" css={css` 
        display: flex;
        justify-content: center;
        margin: 0 auto;
        object-fit: cover; 
        object-position: center center; 
        opacity: 1; 
        transition: opacity 0.5s ease 0s;

        :hover{
          transform:
        }
        
        
        `}
         />
      </div>
      
      <section className={layoutGuideStyle.post_box}>

        <div className={layoutGuideStyle.post_title}>
          <p className={layoutGuideStyle.post_country}>{props.data.contentfulGuidePost.country}</p>
          <h1 className={layoutGuideStyle.title}>{props.data.contentfulGuidePost.title}</h1>
          <p className={layoutGuideStyle.post_author}>By <span className={layoutGuideStyle.post_author_name}>{props.data.contentfulGuidePost.author}</span> on <b> {props.data.contentfulGuidePost.publishedDate}</b></p>
          <p className={layoutGuideStyle.post_summary}>{documentToReactComponents(props.data.contentfulGuidePost.summary.json, options)}</p>
        </div>

        <div className={layoutGuideStyle.post_main}>
          {documentToReactComponents(props.data.contentfulGuidePost.body.json, options)}
        <CommentCount config={disqusConfig} placeholder={'Leave a comment:'} />
        <Disqus config={disqusConfig} />
        </div>

      </section>
    </LayoutGuides>
  )
}


export default Blog