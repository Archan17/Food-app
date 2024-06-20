import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Componentdid Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <>
        <h1 className="about-us">Hello There!!</h1>
        <UserClass
          name={"Archan (class)"}
          location={"Ahmedabad (class)"}
          email={"pandyaarchan17504@gmail.com (class)"}
        />
      </>
    );
  }
}

export default AboutUs;
