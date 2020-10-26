import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./styles.scss"

const IndexPage = ({ data }) => {
  const indexModels = data.allStrapiModel.edges;

  function calculatePriceMark (priceLow, priceHigh) {
    var priceMark = '¥';
    var avgPrice = (priceHigh + priceLow) / 2;
    if (avgPrice > 1500) {
      priceMark = '¥¥¥';
    } else if (avgPrice > 1000) {
      priceMark = '¥¥'
    }
    return priceMark
  }

  return (
  <Layout>
    <SEO title="首页" />

    <div class="section">
      <div class="container is-max-widescreen">
        <div class="columns is-multiline">
          {indexModels.map(({ node }) => {
            return (
              <div class="column is-one-third-tablet is-one-quarter-desktop">
                <Link to="/">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-square cover-image-thumbnail">
                        <img src={node.CoverPicture.publicURL} />
                      </figure>
                    </div>
                    <div class="card-content level is-mobile">
                      <div class="level-left">
                        {node.LivingCity.DisplayName}
                      </div>
                      <div class="level-right">
                        {calculatePriceMark(node.PayRangeLow, node.PayRangeHigh)}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query {
    allStrapiModel {
      edges {
        node {
          DisplayName
          CoverPicture {
            publicURL
          }
          LivingCity {
            DisplayName
          }
          PayRangeLow
          PayRangeHigh
        }
      }
    }
  }
`