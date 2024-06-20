import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Child Component did mount");
  }

  render() {
    const { name, location, email } = this.props;
    const { count } = this.state;
    console.log("Child Render");
    return (
      <>
        <div className="container">
          <div className="user-card">
            <h1>Count = {count}</h1>
            <button
              className="search-btn"
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}
            >
              Button
            </button>
            <h2>Name : {name}</h2>
            <h2>Location : {location}</h2>
            <h2>Email : {email}</h2>
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;
