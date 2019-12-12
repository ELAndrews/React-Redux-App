import React from "react";
import { connect } from "react-redux";
import { increment } from "../state/actionCreators";

export function Counter({ count, increment }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Add</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps, { increment })(Counter);
