import React from 'react';

const Signup = (props) => {
    return (
        <div>
            <h1>signup page</h1>
            {props.setdata("data is drilled through signin page")}
            <h2>{props.data}</h2>
        </div>
    );
}

export default Signup;
