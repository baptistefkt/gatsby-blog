/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Archive from './archive'
import './layout.css'
import Img from 'gatsby-image'

const Body = styled.div`
  padding-top: 80px;
`

const MainLayout = styled.main`
  color: #333;
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 2rem;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: {
          regex: "/forest/"
        }) {
          childImageSharp {
            fluid (maxHeight: 1000){
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Body>
        <Header siteTitle={data.site.siteMetadata.title} />
        {location.pathname === "/" &&
          <Img fluid={data.file.childImageSharp.fluid} />
        }
        <MainLayout>
          <div>
            {children}
          </div>
          <Archive />
        </MainLayout>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer>
      </Body>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
