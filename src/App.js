import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers.js";
import UserDetail from "./components/UserDetail.js";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false,
      name: ""
    };

  }


  render() {


    let theDiv = "";
    theDiv = <div> should I be here</div>
    if (this.state.visible) {
      theDiv = <div>im true</div>
    }

  return (
    <div>

      {theDiv}

      <ListOfUsers changeUser={this.props.changeUser} users={this.props.users} />
      <UserDetail user={this.props.currentUser} />
       <button onClick={
        // put a function right here anyway you want
        // be familiar with this setup
         () => {
          // this.state.visible = !this.state.visible;
          this.setState({visible: !this.state.visible});

        }

      }
      >Click Me</button>
    </div>
  );
 }
}

export default App;
