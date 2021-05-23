import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ description, lang, meta, title, postThumbnail }) => {
  const { site } = useStaticQuery (
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            url
            ogpImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const OGPImage = postThumbnail || `${site.siteMetadata.siteUrl}${site.siteMetadata.ogpImage}`
  const siteURL = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title = {metaTitle}
      titleTemplate = {`%s | ${site.siteMetadata.description}`}

      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: OGPImage,
        },
        {
          property: `og:url`,
          content: siteURL,
        },
        {
          property: `og:type`,
          content: 'website',
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: 'summary_large_image',
        },
        {
          name: `twitter:site`,
          content: '@_endoftrack',
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: OGPImage,
        },
      ].concat(meta)}
    >
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Noto+Sans+JP:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

Head.defaultProps = {
    lang: `ja-jp`,
    meta: [],
    title: `Koheybase.com`,
    description: ``,
}

Head.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default Head