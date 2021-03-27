import React from 'react'
import { graphql } from 'gatsby'

const Article = props => {
    const content = props.data.contentfulWorks
    console.log(content.content.raw)
    return (
      <div>
        <div>{content.title}</div>
      </div>
    )
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