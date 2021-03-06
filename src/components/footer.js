import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteName, beian, cities }) => (
  <footer class="footer">
    <div class="container is-max-widescreen has-text-centered is-size-7">
      <p>
        <span class="mr-2">© {new Date().getFullYear()} <Link to="/" className="has-text-dark">{siteName}</Link></span>
        {cities.map(({ node }) => {
          return (
            <span class="mr-2">{node.DisplayName}</span>
          )
        })}
        <span class="mr-4"><a href="https://beian.miit.gov.cn/" class="has-text-dark" rel="noreferrer" target="_blank">{beian}</a></span>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteName: PropTypes.string,
}

Footer.defaultProps = {
  siteName: ``,
}

export default Footer
