import React, {Component} from "react";
import PropTypes from "prop-types";



class ListOfUsers extends React.Component {

  /*
  var props = {
    users:[]
  }
  */
  constructor() {
    super();
    this.state = {
      visible: true,
      btn: "hide",
      searchText: ""
    };

  }
  showHide() {
    if (this.state.visible) {
      this.setState({
        visible: false,
        btn: "Show"
      });
    } else {
      this.setState({
        visible: true,
        btn: "Hide"
      });
    }

  }

  render() {

    let userDivs = "";
    const filterUsers = this.props.users.filter((u) => {
		// var u = {last_name: “bluth”}
      if (this.state.searchText === "") {
        return true;
      }

      return u.last_name.indexOf(this.state.searchText) > -1;
    });
    if (this.state.visible) {
      userDivs = filterUsers.map(user => {
        return (
          <div key={user.id}>
            {user.first_name} {user.last_name}
          </div>
        );
      });
    }

    return (
      <div>
        {userDivs}
        <button onClick={() => this.showHide()}>
          {this.state.btn}
        </button>
        <br />
        <div> Search </div>
        <input
          type="text"
          value={this.state.searchText}
        onChange={(e) => this.setState({
          searchText: e.target.value
        })

        }
        />
      </div>
    );
  }
}

ListOfUsers.propTypes = {
  users: PropTypes.array
};


export default ListOfUsers;
