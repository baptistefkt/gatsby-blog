/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const Aside = styled.aside`
  border: 1px solid #eee;
  padding: 1rem;
  margin-top: 15px;
  border-radius: 4px;
  background-color: #fff;
  opacity: 0.9;
`

const POST_QUERY = graphql`
  query BlogpostArchive {
    allMarkdownRemark(limit: 5, sort: {
    order: DESC,
    fields: [frontmatter___date]
  }) {
    edges {
      node {
        frontmatter {
          title
          slug
        }
      }
    }
  }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <Aside>
          <h3>Archive</h3>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>

            </li>
          ))}
        </Aside>
      </>
    )}
  />
)

export default Archive
