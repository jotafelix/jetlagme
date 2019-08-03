/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata:{
        title: 'JetLag Me',
        author: 'Felix Gonzalo'
    },
    plugins: [
      {
        resolve: `gatsby-plugin-emotion`,
        options: {
          // Accepts all options defined by `babel-plugin-emotion` plugin.
        },
      },
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: process.env.GATSBY_DISQUS_NAME
        }
      },
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
      },
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
            plugins: [
              'gatsby-remark-relative-images',
              {
                resolve: 'gatsby-remark-images',
                options: {
                  maxWidth: 750,
                  linkImagesToOriginal: false
                }
              }
            ]
          }
      }
    ]
}
