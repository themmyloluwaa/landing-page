import React from "react"
import "../styles/index.css"
import Header from "../components/Header"
import JMText from "../components/JMText"
import JMPhone from "../components/JMPhone"

export default () => {
  return (
    <div>
      <Header />
      <JMText />
      <JMPhone />
      {/* <svg id='Layer_1' data-name='Layer 1' xmlns='https://www.w3.org/2000/svg' viewBox='0 0 1416.19 174.01'>
      <title>Untitled-4</title><path className='cls-1' d='M0, 280.8S283.66,59,608.94, 163.56s437.94,150.57,808,10.34V309.54H0V280.8Z' transform='translate(0-135.53)' />
      </svg> */}
    </div>
  )
}
