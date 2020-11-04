import React from 'react'
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import SEO from "../components/seo"


const ModelTemplate = ({ data }) => {
  console.log(data);
  const model = data.strapiModel;
  const modelPictures = data.allStrapiPicture.edges;
  const modelVideos = data.allStrapiVideo.edges;

  function displayGender (gender) {
    var genderDisplayName = '女';
    if (gender === 'Male') {
      genderDisplayName = '男'
    } else if (gender === 'Boy') {
      genderDisplayName = '男童'
    } else if (gender === 'Girl') {
      genderDisplayName = '女童'
    }
    return genderDisplayName;
  }

  function calculateAge (dob) {
    var age = 22;
    if (!!dob) {
      age = Math.floor((new Date().getTime() - new Date(dob).getTime()) / (1000 * 3600 * 24 * 365));
    }
    return age;
  }

  function displayPay (payRangeLow, payRangeHigh) {
    var payDisplayText = '';
    if (payRangeLow < payRangeHigh) {
      payDisplayText = payRangeLow + ' - ' + payRangeHigh;
    } else {
      payDisplayText = payRangeLow;
    }
    return payDisplayText + ' 元/小时';
  }

  function translateColor (color) {
    var colorDict = {
      'Black' : '黑色',
      'Blonde' : '金色',
      'Blue' : '蓝色',
      'Brown' : '褐色',
      'Green' : '绿色',
      'Grey' : '灰色',
      'Purple' : '紫色',
      'Red' : '红色',
      'Turquoise' : '青色',
      'White' : '白色',
      'Yellow' : '黄色',
    };
    return colorDict[color];
  }

  return (
    <Layout>
      <Helmet>
        <link href="https://unpkg.com/cloudinary-video-player@1.4.3/dist/cld-video-player.min.css" rel="stylesheet" />
        <script src="https://unpkg.com/cloudinary-core@2.10.3/cloudinary-core-shrinkwrap.min.js" type="text/javascript"></script>
        <script src="https://unpkg.com/cloudinary-video-player@1.4.3/dist/cld-video-player.min.js" type="text/javascript"></script>

        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/2.2.4/jquery.min.js" type="text/javascript" />
        <script src={withPrefix('model-script.js')} type="text/javascript" />
      </Helmet>
      <SEO 
        title={`${model.DisplayName} 模特详情`}
        description={`模特 ${model.DisplayName} 能满足您的外出拍摄、平面拍摄、视频拍摄需求。51外模，专业外模平台，找外模，上51外模网`}
      />

      <div class="section">
        <div class="container is-max-widescreen">
          <h1 class="title">{model.DisplayName}</h1>
          <div class="columns">
            <div class="column">
              <div>
                {modelPictures &&
                <div>
                  <h3>模特图集</h3>
                  <div class="columns is-mobile">
                    {
                    modelPictures.map(({ node }) => {
                      return (
                        <div class="column">
                          <img src={node.Picturefile.publicURL} />
                        </div>
                      )
                    })}
                  </div>
                </div>
                }
                {modelVideos &&
                  <div>
                    <h3>模特视频</h3>
                    <div class="columns is-mobile">
                    {modelVideos.map(({ node }) => {
                      return (
                        <div class="column">
                          <video controls>
                            <source src={node.VideoFile.publicURL} />
                          </video>
                        </div>
                      )
                    })}
                    </div>
                  </div>
                }
              </div>
            </div>
            <div class="column">
              <div class="columns is-mobile">
                <div class="column">
                  <div class="kv-label">姓名</div>
                  <div class="kv-value">{model.DisplayName}</div>
                </div>
                
              </div>
              <div class="columns is-mobile">
                { model.Gender && 
                  <div class="column">
                    <div class="kv-label">性别</div>
                    <div class="kv-value">{displayGender(model.Gender)}</div>
                  </div>
                }
                { model.DateOfBirth && 
                  <div class="column">
                    <div class="kv-label">年龄</div>
                    <div class="kv-value">{calculateAge(model.DateOfBirth)}</div>
                  </div>
                }
              </div>
              <div class="columns is-mobile">
                { model.PlaceOfBirth &&
                  <div class="column">
                    <div class="kv-label">出生地</div>
                    <div class="kv-value">{model.PlaceOfBirth}</div>
                  </div>
                }
                { model.LivingCity &&
                  <div class="column">
                    <div class="kv-label">当前城市</div>
                    <div class="kv-value">{model.LivingCity.DisplayName}</div>
                  </div>
                }
              </div>
              <div class="columns is-mobile">
                { model.Height &&
                  <div class="column">
                    <div class="kv-label">身高{model.Weight ? '体重' : ''}</div>
                    <div class="kv-value">
                      {model.Height}cm
                      {model.Weight ? ' / ' + model.Weight + 'kg' : ''}
                    </div>
                  </div>
                }
                { model.Bust &&
                  <div class="column">
                    <div class="kv-label">三围</div>
                    <div class="kv-value">
                      {model.Bust + ' / ' + model.Waist + ' / ' + model.Hips}
                      {model.CupSize ? ' (Cup: ' + model.CupSize + ')' : ''}
                    </div>
                  </div>
                }
              </div>
              <div class="columns is-mobile">
                { model.SkinColor &&
                  <div class="column">
                    <div class="kv-label">肤色</div>
                    <div class="kv-value">{translateColor(model.SkinColor)}</div>
                  </div>
                }
                { model.HairColor &&
                  <div class="column">
                    <div class="kv-label">头发颜色</div>
                    <div class="kv-value">{translateColor(model.HairColor)}</div>
                  </div>
                }
              </div>
              <div class="columns is-mobile">
                { model.EyesColor &&
                  <div class="column">
                    <div class="kv-label">眼睛颜色</div>
                    <div class="kv-value">{translateColor(model.EyesColor)}</div>
                  </div>
                }
                { model.ShoeSize &&
                  <div class="column">
                    <div class="kv-label">鞋子尺码</div>
                    <div class="kv-value">{model.ShoeSize}</div>
                  </div>
                }
              </div>
              <div class="columns is-mobile">
                { model.LanguageFirst &&
                  <div class="column">
                    <div class="kv-label">语种</div>
                    <div class="kv-value">
                      {model.LanguageFirst.Chinese}
                      {model.LanguageSecond ? ' / ' + model.LanguageSecond.Chinese: ''}
                    </div>
                  </div>
                }
              </div>
              <div class="columns is-mobile">
                { model.PayRangeLow &&
                  <div class="column">
                    <div class="kv-label">价格</div>
                    <div class="kv-value">{displayPay(model.PayRangeLow, model.PayRangeHigh)}</div>
                  </div>
                }
              </div>
              { model.agent &&
                <div>
                  <button id="open-model-modal-btn" class="button is-primary" data-target="agent-contact-modal" aria-haspopup="true">联系下单</button>
                  <div>
                  
                  </div>
                  <div id="agent-contact-modal" class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                      <div class="box">
                        <div class="media">
                          <div class="media-left">
                            <figure class="image is-128x128">
                              <img src={model.agent.QRCode.publicURL} alt="" />
                            </figure>
                          </div>
                          <div class="media-content">
                            <h4 class="title is-5">Hi, 我是模特 {model.DisplayName} 的经纪人 {model.agent.DisplayName}</h4>
                            <p>请用微信扫描左侧的二维码联系我，我将为您对接模特本人，协助下单并提供全程服务。</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <button class="modal-close is-large" aria-label="close"></button>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default ModelTemplate


export const pageQuery = graphql`
  query ModelQuery($strapiId: String!) {
    allStrapiPicture(
      filter: {
        model: {
          id: { eq: $strapiId }
        }
      }
    ) {
      edges {
        node {
          Picturefile {
            publicURL
          }
        }
      }
    }
    allStrapiVideo(
      filter: {
        model: {
          id: { eq: $strapiId }
        }
      }
    ) {
      edges {
        node {
          VideoFile {
            publicURL
          }
        }
      }
    }
    strapiModel(
      strapiId: {eq: $strapiId}
    ) {
      id
      DisplayName
      Gender
      DateOfBirth
      PlaceOfBirth
      LivingCity {
        DisplayName
      }
      PayRangeLow
      PayRangeHigh
      Height
      Weight
      Bust
      Waist
      Hips
      CupSize
      SkinColor
      HairColor
      EyesColor
      ShoeSize
      LanguageFirst {
        Chinese
      }
      LanguageSecond {
        Chinese
      }
      agent {
        DisplayName
        QRCode {
          publicURL
        }
      }
      CoverPicture {
        publicURL
      }
    }
  }
`