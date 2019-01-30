import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./TestActoins";
export class TestComponent extends Component {
  render() {
    console.log(this.props);
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test Compnents</h1>
        <h1>This is the answer: {data}</h1>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.test.data
});

const mapDispachToAction = {
  incrementCounter,
  decrementCounter
};
export default connect(
  mapStateToProps,
  mapDispachToAction
)(TestComponent);
