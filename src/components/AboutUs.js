import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <h1 className="about-us">Welcome!!</h1>
        <UserClass name={"Archan"} location={"Ahmedabad"} />
      </>
    );
  }
}

export default AboutUs;
