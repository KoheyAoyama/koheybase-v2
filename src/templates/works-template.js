import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from "@emotion/react"
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Scaffold from "../components/scaffold"
import Tag from '../components/tag'

const Article = props => {
    const content = props.data.contentfulWorks
    const thumbnail = getImage(content.thumbnail)
    return (
      <Scaffold>
        <div className="md:max-w-2xl m-auto">
          <GatsbyImage
            alt="Thumbnail"
            image={thumbnail}
            className="md:mx-4"
          />
          <div className="px-4 my-6">
            <p className="font-bold mb-2">{content.period}</p>
            <h1 className="pb-2 text-3xl">{content.title}</h1>
            {content.genre.map((genre, index) => (
              <span className="mr-2 mb-1">
                <Tag key={index}>{genre}</Tag>
              </span>
            ))}
          </div>
          {renderRichText(content.content, options)}
        </div>
      </Scaffold>
    )
}

const options = {
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, children) => {
      return (
        <div key={node} className="flex flex-col space-y-6 leading-loose">{children}</div>
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <p className="px-4">{children}</p>
        )
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 key={node} className="text-3xl px-4">{children}</h1>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 key={node} className="text-lg font-bold px-4">{children}</h2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <h3 key={node} className="font-bold px-4">{children}</h3>
      )
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return (
        <h4 key={node} className="px-4 text-gray-400">{children}</h4>
      )
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return (
        <ul key={node} className="px-4">
          {children.map((child) => (
            child.props.children.map((child) => (
              <li css={css`
                position: relative;
                margin-left: 4px;
                &:before {
                  position: absolute;
                  top: 50%;
                  left: -2px;
                  content: '';
                  transform: translateY(-50%);
                  -webkit-transform: translateY(-50%);
                  height: 4px;
                  width: 4px;
                  border-radius: 999px;
                  background: #333333;
                  content: "";
                }
              `}>
                {child}
              </li>
            ))
          ))}
        </ul>
      )
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return (
        <ol key={node} className="px-4">
          {children.map((child, index) => (
            child.props.children.map((child) => (
              <li css={css`
                position: relative;
                margin-left: 8px;
                &:before {
                  content: '${index + 1}.';
                  position: absolute;
                  left: -4px;
                }
              `}>{child}</li>
            ))
          ))}
        </ol>
      )
    },
    [BLOCKS.QUOTE]: (node, children) => {
      return (
        <blockquote key={node} className="text-gray-500 py-4 w-full h-auto bg-gray-50">
          {children}
        </blockquote>
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <div>
          <GatsbyImage
            alt="Thumbnail"
            image={getImage(node.data.target)}
            className="md:mx-4"
          />
        </div>
      )
    },
  }
}

export const query = graphql`
  query($id: String!) {
    contentfulWorks(id: {eq: $id}) {
      title
      genre
      period(formatString: "y")
      thumbnail {
        gatsbyImageData
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            gatsbyImageData(placeholder: BLURRED)
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default Article