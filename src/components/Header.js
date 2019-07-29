import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <StaticQuery
          query={query}
          render={data => (
            <Link to="/">
              <Img
                fixed={data.file.childImageSharp.fixed}
                className="header-img"
              />
            </Link>
          )}
        />
        <ul>
          <li>
            <Link to="/Register">REGISTER</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "Jornyman.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Header
