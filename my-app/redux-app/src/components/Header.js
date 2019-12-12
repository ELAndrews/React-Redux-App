import React from "react";
import { connect } from "react-redux";

export function Header({ count, articles }) {
  return (
    <div>
      <h1>Header</h1>
      {count}
      {articles}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Header);
