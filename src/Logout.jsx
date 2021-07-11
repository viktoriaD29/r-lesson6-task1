import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Logout = (props) => {
  return (
    <button className="login btn" onClick={props.onLogout}>
      Logout
    </button>
  );
};

export default Logout;
