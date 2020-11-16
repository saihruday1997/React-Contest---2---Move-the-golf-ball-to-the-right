import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.onKeyPressFn = this.onKeyPressFn.bind(this);
  }

  onKeyPressFn(e) {
    //console.log("arrow key pressed");
    //console.log(e.key);
    if (e.key === "ArrowRight") {
      //console.log("inside IF");

      //console.log(this.state.posi);
      this.setState({ ballPosition: { left: `${this.state.posi}px` } });
      this.setState({ posi: this.state.posi + 5 });
    }
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressFn, false);
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
