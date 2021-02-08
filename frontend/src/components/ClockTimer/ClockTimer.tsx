import React from "react";
import "./ClockTimer.css";

const ClockTimer = () => {
  return (
    <>
      <div className="mainTimer">
        <div className="stopwatch" role="img">
          <div className="knob">
            <div className="handle">
              <div className="inner-handle"></div>
            </div>
            <div className="base"></div>
          </div>
          <div className="timer">
            <div className="inner-shadow-top-left"></div>
            <div className="inner-shadow-top-right"></div>
            <div className="inner-shadow-bottom-left"></div>
            <div className="inner-timer">
              <ul className="hours">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="counter">
                <span></span>
              </div>
              <div className="inner-timer-shadow"></div>
            </div>
            <div className="circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="toggle">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="light">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockTimer;
