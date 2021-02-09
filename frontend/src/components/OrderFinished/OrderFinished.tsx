import React from "react";
import Landing from "../Landing/Landing";
import "./OrderFinished.css";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const OrderFinished = () => {
  return (
    <>
      <div className="penguin">
        <div className="penguin-bottom">
          <div className="right-hand"></div>
          <div className="left-hand"></div>
          <div className="right-feet"></div>
          <div className="left-feet"></div>
        </div>
        <div className="penguin-top">
          <div className="right-cheek"></div>
          <div className="left-cheek"></div>
          <div className="belly"></div>
          <div className="right-eye">
            <div className="sparkle"></div>
          </div>
          <div className="left-eye">
            <div className="sparkle"></div>
          </div>
          <div className="blush-right"></div>
          <div className="blush-left"></div>
          <div className="beak-top"></div>
          <div className="beak-bottom"></div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
      <h1>Your order is ready!</h1>
      <Link to="/foods">
      <Button variant="contained" color="primary" style={{backgroundColor:"#2C3E50"}}>
        MAKE ANOTHER ORDER
      </Button>
      </Link>
      </div>
    </>
  );
};

export default OrderFinished;
