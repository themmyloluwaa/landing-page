import React from "react"
import "../styles/JMPhone.css"
import { Animated } from "react-animated-css"

const JMPhone = () => {
  return (
    <Animated
      animationIn="fadeInRight"
      animationInDelay={1200}
      isVisible={true}
    >
      <section className="phone"></section>
    </Animated>
  )
}
export default JMPhone
