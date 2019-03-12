import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  opacity: 0.98;
  box-shadow: 2px 0px 10px #aaa;
  position: fixed;
  top: 0;
  padding: 1rem;
  z-index: 100;
  font-size: 2rem;

  img {
    margin-bottom : 0;
  }

  a {
    text-decoration: none;
    color: #777;

    &:hover {
      color: #444;
    }
  }

  h1 {
    margin-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
