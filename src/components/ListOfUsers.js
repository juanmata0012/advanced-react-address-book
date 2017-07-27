import React from "react";



class ListOfUsers extends React.Component {

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
    if (this.state.visible) {
      userDivs = this.props.users.map(user => {
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


export default ListOfUsers;
