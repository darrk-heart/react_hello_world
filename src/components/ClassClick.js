import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("You clicked me again, ouch");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
