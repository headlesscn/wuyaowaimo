import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import PriceTable from "./pricetable.js"
// import LogoIcon from "../images/51waimo-icon.png"
import Logo from "../images/logo.svg"

const Header = ({ siteName, slogan, cities }) => (
  <div class="mt-4">
    <header class="container is-max-widescreen">
      <div class="columns is-vcentered">
        <div class="column is-one-quarter-tablet">
          <div class="site-logo-container">
            <Link to="/" className="has-text-primary">
              <h1>
                <img src={Logo} alt={siteName} />
              </h1>
              <h3 class="has-text-weight-bold is-size-7">{slogan}</h3>
            </Link>
          </div>
        </div>
        {cities &&
        <div class="column" style={{
          padding: 0
        }}>
          <div class="city-list">
            {cities.map(({ node }) => {
              return (
                <span class="city-list-node">{node.DisplayName}</span>
              )
            })}
          </div>
        </div>
        }
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
