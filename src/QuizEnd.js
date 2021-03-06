import React, { Component } from "react";

class QuizEnd extends Component {
  handleResetClick() {
    this.props.resetClickHandler();
  }
  render() {
    return (
      <div className="QuizEnd">
        <p>Thanks for playing!</p>
        &nbsp;
        <a onClick={this.handleResetClick.bind(this)} href="">
          Reset Quiz
        </a>
      </div>
    );
  }
}

export default QuizEnd;
