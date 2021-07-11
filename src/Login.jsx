import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const Login = (props) => {
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;
