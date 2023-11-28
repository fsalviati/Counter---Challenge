import React from "react";
import { useState } from "react";
import "./counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(new Date());

  return (
    <div className="counter-step-main-container">
      {/* Step Container */}
      <div className="step-container">
        <button className="btn-step" onClick={() => setStep(step - 1)}>
          -
        </button>
        <div>
          <h1>Step: {step}</h1>
          <button className="btn-reset" onClick={() => setStep(0)}>
            reset
          </button>
        </div>
        <button className="btn-step" onClick={() => setStep(step + 1)}>
          +
        </button>
      </div>

      {/* Counter Container */}
      <div className="counter-container">
        <button
          className="btn-counter"
          onClick={() => setCounter(counter - step)}
        >
          -
        </button>
        <div>
          <h1>Counter: {counter}</h1>
          <button className="btn-reset" onClick={() => setCounter(0)}>
            reset
          </button>
        </div>
        <button
          className="btn-counter"
          onClick={() => setCounter(counter + step)}
        >
          +
        </button>
      </div>

      {/* Text Container */}
      <div className="text-container">
        <p>
          {counter !== 0
            ? `${counter > 0 ? counter : -counter} day${
                counter === 1 || counter === -1 ? "" : "s"
              } ${counter > 0 ? "from" : "to"} today is
              ${new Date(
                date.getTime() + counter * 24 * 60 * 60 * 1000,
              ).toDateString()}`
            : "Today is " + date.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default Counter;
