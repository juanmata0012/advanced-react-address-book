import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

console.log(users);

let currentUser = users[0];

function changeUser(user) {
  currentUser = user;
  render();
}

function render() {
  ReactDOM.render(
    <App changeUser={changeUser} users={users} currentUser={currentUser} />,
    document.getElementById("root")
  );
}
render();
