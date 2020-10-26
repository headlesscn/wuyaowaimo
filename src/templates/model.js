import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ModelTemplate = ({ data }) => {
  const model = data;

  return (
    <Layout>
      <SEO 
        title={`${model.strapiModel.DisplayName} 模特详情`}
        description={`模特 ${model.strapiModel.DisplayName} 能满足您的外出拍摄、平面拍摄、视频拍摄需求。${model.strapiModel.DisplayName} 位于${model.strapiModel.LivingCity.DisplayName}。51外模，专业外模平台，找外模，上51外模网`}
      />

      <div class="section">
        <div class="container is-max-widescreen">
          <h1 class="title">{model.strapiModel.DisplayName}</h1>
          <div class="columns">
            <div class="column">
              Gallery
            </div>
            <div class="column">
              <div class="columns">
                <div class="column">
                  <label class="kv-label">名字</label>
                  <div class="control">{model.strapiModel.DisplayName}</div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <label class="kv-label">出生地</label>
                  <div class="control">{model.strapiModel.PlaceOfBirth}</div>
                </div>
                <div class="column">
                  <label class="kv-label">当前城市</label>
                  <div class="control">{model.strapiModel.LivingCity.DisplayName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default ModelTemplate


export const pageQuery = graphql`
  query ModelQuery($id: String!) {
    strapiModel(
      id: {eq: $id}
    ) {
      id
      DisplayName
      PlaceOfBirth
      LivingCity {
        DisplayName
      }
    }
  }
`