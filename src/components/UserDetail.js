import React from "react";
// import UserInfo from './UserInfo'
import PropTypes from "prop-types";


function UserDetail(props) {

  return (
    <div>
      {props.user.first_name} {props.user.last_name}
      <br/>
      {props.user.address}
      <br/>
      {props.user.phone}
      <br/>
      {props.user.occupation}
      <br/>
      <img src={props.user.avatar}/>

    </div>

  );
}

UserDetail.propTypes = {
  user: PropTypes.object
};

export default UserDetail;
