import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoIcon from "../images/51waimo-icon.png"
import Logo from "../images/logo.svg"

const Header = ({ siteName, slogan }) => (
  <div class="mt-2">
    <header class="container is-max-widescreen">
      <div class="level">
        <div class="level-left">
          <Link to="/" className="has-text-primary">
            <div class="media">
              <figure class="media-left image is-64x64">
                <img src={LogoIcon} alt="Logo icon" />
              </figure>
              <div class="media-right ml-0">
                <figure class="image mt-1">
                  <img src={Logo} alt={siteName} />
                </figure>
                <h3 class="has-text-weight-bold is-size-7" style={{
                  letterSpacing: `1rem`
                }}>{slogan}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div class="level-right">
          <table>
            <tbody>
              <tr>
                <th class="has-text-right has-text-weight-normal pr-2">¥</th>
                <td>500-1,000 <span class="is-size-7">元/小时</span></td>
              </tr>
              <tr>
                <th class="has-text-right has-text-weight-normal pr-2">¥¥</th>
                <td>1,000-1,500 <span class="is-size-7">元/小时</span></td>
              </tr>
              <tr>
                <th class="has-text-right has-text-weight-normal pr-2">¥¥¥</th>
                <td>1,500-2,500 <span class="is-size-7">元/小时</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}

export default Header
