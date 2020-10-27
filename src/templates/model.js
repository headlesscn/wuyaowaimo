import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ModelTemplate = ({ data }) => {
  const model = data;

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
      'Brwon' : '褐色',
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
                  <div class="kv-label">姓名</div>
                  <div class="kv-value">{model.strapiModel.DisplayName}</div>
                </div>
                
              </div>
              <div class="columns">
                { model.strapiModel.Gender && 
                  <div class="column">
                    <div class="kv-label">性别</div>
                    <div class="kv-value">{displayGender(model.strapiModel.Gender)}</div>
                  </div>
                }
                { model.strapiModel.DateOfBirth && 
                  <div class="column">
                    <div class="kv-label">年龄</div>
                    <div class="kv-value">{calculateAge(model.strapiModel.DateOfBirth)}</div>
                  </div>
                }
              </div>
              <div class="columns">
                { model.strapiModel.PlaceOfBirth &&
                  <div class="column">
                    <div class="kv-label">出生地</div>
                    <div class="kv-value">{model.strapiModel.PlaceOfBirth}</div>
                  </div>
                }
                { model.strapiModel.LivingCity &&
                  <div class="column">
                    <div class="kv-label">当前城市</div>
                    <div class="kv-value">{model.strapiModel.LivingCity.DisplayName}</div>
                  </div>
                }
              </div>
              <div class="columns">
                { model.strapiModel.PayRangeLow &&
                  <div class="column">
                    <div class="kv-label">价格</div>
                    <div class="kv-value">{displayPay(model.strapiModel.PayRangeLow, model.strapiModel.PayRangeHigh)}</div>
                  </div>
                }
                
              </div>
              <div class="columns">
                { model.strapiModel.Height &&
                  <div class="column">
                    <div class="kv-label">身高{model.strapiModel.Weight ? '体重' : ''}</div>
                    <div class="kv-value">
                      {model.strapiModel.Height}cm
                      {model.strapiModel.Weight ? ' / ' + model.strapiModel.Weight + 'kg' : ''}
                    </div>
                  </div>
                }
                { model.strapiModel.Bust &&
                  <div class="column">
                    <div class="kv-label">三围</div>
                    <div class="kv-value">
                      {model.strapiModel.Bust + ' / ' + model.strapiModel.Waist + ' / ' + model.strapiModel.Hips}
                      {model.strapiModel.CupSize ? ' (Cup: ' + model.strapiModel.CupSize + ')' : ''}
                    </div>
                  </div>
                }
              </div>
              <div class="columns">
                { model.strapiModel.SkinColor &&
                  <div class="column">
                    <div class="kv-label">肤色</div>
                    <div class="kv-value">{translateColor(model.strapiModel.SkinColor)}</div>
                  </div>
                }
                { model.strapiModel.HairColor &&
                  <div class="column">
                    <div class="kv-label">头发颜色</div>
                    <div class="kv-value">{translateColor(model.strapiModel.HairColor)}</div>
                  </div>
                }
              </div>
              <div class="columns">
                { model.strapiModel.EyesColor &&
                  <div class="column">
                    <div class="kv-label">眼睛颜色</div>
                    <div class="kv-value">{translateColor(model.strapiModel.EyesColor)}</div>
                  </div>
                }
                { model.strapiModel.ShoeSize &&
                  <div class="column">
                    <div class="kv-label">鞋子尺码</div>
                    <div class="kv-value">{model.strapiModel.ShoeSize}</div>
                  </div>
                }
              </div>
              <div class="columns">
                { model.strapiModel.LanguageFirst &&
                  <div class="column">
                    <div class="kv-label">语种</div>
                    <div class="kv-value">
                      {model.strapiModel.LanguageFirst.Chinese}
                      {model.strapiModel.LanguageSecond ? ' / ' + model.strapiModel.LanguageSecond.Chinese: ''}
                    </div>
                  </div>
                }
              </div>
              { model.strapiModel.agent &&
                <div>
                  <div>agent</div>
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
  query ModelQuery($id: String!) {
    strapiModel(
      id: {eq: $id}
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
    }
  }
`