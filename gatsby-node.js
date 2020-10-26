/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const modelPage = path.resolve('./src/templates/model.js')

  const result = await graphql(
    `
      {
        allStrapiModel {
          edges {
            node {
              id
              DisplayName
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading the model detail page. `,
      result.errors
    )
    return
  }

  const models = result.data.allStrapiModel.edges

  console.log('xxx')

  if (models.length > 0) {
    
    models.forEach(model => {
      createPage({
        path: `/model/${model.node.strapiId}/`,
        component: modelPage,
        context: {
          id: model.node.id
        },
      })
    })
  }

  
  // const result = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: path.resolve(`./src/templates/blog-post.js`),
  //     context: {
  //       // Data passed to context is available
  //       // in page queries as GraphQL variables.
  //       slug: node.fields.slug,
  //     },
  //   })
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `StrapiModel`) {
    const value = createFilePath({ node, getNode, basePath: `templates` })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
