import React, { Component } from "react";
class Alert extends Component {
  render() {
    return (
      <div>
        <div className={"alert alert-" + this.props.type}>
          <h4>{this.props.header}</h4>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Alert;