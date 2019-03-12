import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Article = styled.article`
  border-radius: 4px;
  box-shadow: 0px 0px 5px #ccc;
  margin: 1rem 0;
  padding: 1rem;
  transition: .3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0px 2px 8px #ccc;
  }

  h2 {
    font-size: 1.5rem;
    color: purple;
  }

  a {
    text-decoration: none;
  }
`

const LISTING_QUERY = graphql`
  query BlogpostListing {
    allMarkdownRemark(limit: 10, sort: {
    order: DESC,
    fields: [frontmatter___date]
  }) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
      }
    }
  }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) => (
      allMarkdownRemark.edges.map(({ node }) => (
        <Article key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
        </Article>
      ))
    )}
  />
)

export default Listing