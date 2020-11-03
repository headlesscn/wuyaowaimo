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

  if (models.length > 0) {
    
    models.forEach(model => {
      createPage({
        path: `/model/${model.node.strapiId}/`,
        component: modelPage,
        context: {
          strapiId: model.node.strapiId
        },
      })
    })
  }
}

