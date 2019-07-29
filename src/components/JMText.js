import React from "react"
import "../styles/JMText.css"
import { Animated } from "react-animated-css"
import google from "../images/google.png"
import appstore from "../images/appstore.png"
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
          <img src={appstore} alt="appstore" className="one" />
          <img src={google} alt="google play" className="two" />
        </Animated>
      </section>
    </Animated>
  )
}

export default JMText
