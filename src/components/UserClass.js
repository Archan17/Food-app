import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "unkonwn",
        location: "Not Known",
      },
    };
  }
  async componentDidMount() {
    // API CALL

    const data = await fetch("https://api.github.com/users/Archan17");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    console.log("Did Mount called");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Component Rendered");
    return (
      <>
        <div className="container">
          <div className="user-card">
            <img src={avatar_url} alt="" />
            <h2>Name : {name}</h2>
            <h2>Location : {location}</h2>
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;
