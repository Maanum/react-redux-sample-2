import React from "react";
import { connect } from "react-redux";

class User extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.users
          .filter((user) => user.id === this.props.userId)
          .map((user) => user.name)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(User);
