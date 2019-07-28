import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/JMText.css"
import { Animated } from "react-animated-css"
import google from "../images/google.png"

const JMText = () => {
  return (
    <Animated animationIn="fadeInLeft" animationInDelay={200} isVisible={true}>
      <section className="section">
        <h1>Need A Quick Service At Your Doorstep?</h1>
        <p>
          Think Jornyman, the affordable way to hire{" "}
          <span className="artisan">artisans</span> right from your fingertip
        </p>
        <Animated
          animationIn="fadeInUp"
          isVisible={true}
          animationInDelay={600}
        >
          <StaticQuery
            query={query}
            render={data => (
              <Img fixed={data.one.childImageSharp.fixed} className="one" />
            )}
          />
          <img src={google} alt="google play" className="two" />
          {/* <StaticQuery
            query={query}
            render={data => (
              <Img fixed={data.two.childImageSharp.fixed} className="two" />
            )}
          /> */}
        </Animated>
      </section>
    </Animated>
  )
}
export const query = graphql`
  query {
    one: file(relativePath: { eq: "app store.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default JMText
