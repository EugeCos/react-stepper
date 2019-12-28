import "./App.scss";
import Stepper from "./stepper/Stepper";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1
    };
  }

  handleClick(clickType) {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 5) {
      this.setState({
        currentStep: newStep
      });
    }
  }

  render() {
    const { currentStep } = this.state;
    const stepsArray = [
      "Create your account",
      "Add personal info",
      "Add payment details",
      "Complete registration",
      "Registration complete"
    ];
    return (
      <>
        <div className="stepper-container-vertical">
          <Stepper
            direction="vertical"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
          />
        </div>

        <div className="stepper-container-horizontal">
          <Stepper
            direction="horizontal"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
          />
        </div>

        <div className="buttons-container">
          <button onClick={() => this.handleClick()}>Previous</button>
          <button onClick={() => this.handleClick("next")}>Next</button>
        </div>
      </>
    );
  }
}
