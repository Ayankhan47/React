import React from "react";

const User = (props) => {
  return (
    <div>
      <h1>user page</h1>
      <h2>{props.data}</h2>
    </div>
  );
};

export default User;
