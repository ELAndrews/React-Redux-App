import React from "react";
import { connect } from "react-redux";

export function Header(props) {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Header);
