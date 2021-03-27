const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
  {
    allContentfulWorks(filter: {node_locale: {eq: "ja"}}) {
      edges {
        node {
          id
        }
      }
    }
  }
  `).then(result => {
    if (result.errors){
      throw result.errors
    }

    result.data.allContentfulWorks.edges.map(edge => {
      createPage({
        path: `works/${edge.node.id}`,
        component: path.resolve("./src/templates/works-template.js"),
        context: {
            id: edge.node.id,
        },
      })
    })
  })
}
