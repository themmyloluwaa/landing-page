import React, { Component } from "react"
import "../styles/Register.css"
import Header from "../components/Header"
import { Animated } from "react-animated-css"

class Register extends Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let target = e.target
    let value = target.type === "checkbox" ? target.checked : target.value
    let name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log("The form was submitted with the following data:")
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header />
        <Animated animationIn="zoomIn" animationInDelay={500} isVisible={true}>
          <section className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <article className="FormField">
                <label className="FormField__Label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="FormField__Input"
                  placeholder="Enter your full name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </article>
              <article className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </article>
              <article className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="FormField__Input"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </article>

              <article className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input
                    className="FormField__Checkbox"
                    type="checkbox"
                    name="hasAgreed"
                    value={this.state.hasAgreed}
                    onChange={this.handleChange}
                  />{" "}
                  I agree all statements in{" "}
                  <a href="www.google.com" className="FormField__TermsLink">
                    terms of service
                  </a>
                </label>
              </article>

              <article className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button>
              </article>
            </form>
          </section>
        </Animated>
      </div>
    )
  }
}
export default Register
