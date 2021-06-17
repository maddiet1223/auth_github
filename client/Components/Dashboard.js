import React, { Component } from "react";
import Header from "./Header";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>You are logged in.</h3>
      </div>
    );
  }
}

export default Dashboard;
