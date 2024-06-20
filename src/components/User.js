import { useState } from "react";

const User = ({ name, location, email }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="user-card">
          <h1>Count = {count}</h1>
          <h2>Name : {name}</h2>
          <h2>Location : {location}</h2>
          <h2>Email : {email}</h2>
        </div>
      </div>
    </>
  );
};

export default User;
