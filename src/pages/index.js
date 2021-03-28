import React from "react"
import { graphql } from "gatsby"
import Scaffold from "../components/scaffold"
import Card from "../components/card"

const IndexPage = ({ data }) => {
  return (
    <Scaffold>
      <div className="w-screen flex flex-col">
        <div className="mb-10 px-4">
          <p>青山広平</p>
          <p>東京を拠点とするUIデザイナー</p>
        </div>

        <div className="
          md:grid md:grid-cols-3 md:grid-flow-row md:gap-4 md:px-4
        ">
          {data.allContentfulWorks.edges.map(({ node }, index) => (
            <Card key={index} data={node} />
          ))}
        </div>
      </div>
    </Scaffold>
  )
}

export const query = graphql`
query indexPageQuery {
  allContentfulWorks(filter: {node_locale: {eq: "ja"}}) {
    edges {
      node {
        id
        title
        genre
        period
        thumbnail {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, aspectRatio: 2.0)
        }
      }
    }
  }
}
`

export default IndexPage
