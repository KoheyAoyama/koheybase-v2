import React from 'react'
import { graphql } from 'gatsby'
import { css } from "@emotion/react"
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Scaffold from "../components/scaffold"

const Article = props => {
    const content = props.data.contentfulWorks
    return (
      <Scaffold>
        <div className="md:max-w-2xl m-auto">
          <div>{content.title}</div>
          {renderRichText(content.content, options)}
        </div>
      </Scaffold>
    )
}

const options = {
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, children) => {
      return (
        <div key={node} className="text-lg flex flex-col space-y-6">{children}</div>
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
        <h2 key={node} className="text-2xl px-4">{children}</h2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <h3 key={node} className="text-xl font-bold px-4">{children}</h3>
      )
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return (
        <h4 key={node} className="text-lg font-bold px-4">{children}</h4>
      )
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return (
        <h5 key={node} className="text-base font-bold px-4">{children}</h5>
      )
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return (
        <h6 key={node} className="text-sm font-bold px-4">{children}</h6>
      )
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return (
        <ul key={node} className="px-4">
          {children.map((child) => (
            child.props.children.map((child) => (
              <li css={css`
                position: relative;
                margin-left: 8px;
                &:before {
                  position: absolute;
                  top: 50%;
                  left: -4px;
                  content: '';
                  transform: translateY(-50%);
                  -webkit-transform: translateY(-50%);
                  height: 6px;
                  width: 6px;
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
  }
}

export const query = graphql`
  query($id: String!) {
    contentfulWorks(id: {eq: $id}) {
      title
      genre
      period
      thumbnail {
        gatsbyImageData
      }
      content {
        raw
      }
    }
  }
`

export default Article