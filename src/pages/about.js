import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />
    <h1>About Us</h1>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About