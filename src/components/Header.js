import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <StaticQuery
          query={query}
          render={data => (
            <Img
              fixed={data.file.childImageSharp.fixed}
              className="header-img"
            />
          )}
        />
        <ul>
          <li>
            <a href="#">REGISTER</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "JornyMan A.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Header
