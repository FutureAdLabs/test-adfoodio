import "./Waiting.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import ClockTimer from "../../components/ClockTimer/ClockTimer";
import { NotifContext } from "../../context/NofifContext";
import TextEffect from "../../components/TextEffect/TextEffect";
import OrderFinished from "../../components/OrderFinished/OrderFinished";

// This is the waiting page, once the user make the order, it will be redirected to this waiting room
// He can refresh the page because all data persists
const Waiting = () => {
  const App: any = useContext(AppContext);
  const Notif: any = useContext(NotifContext);
  const [status, setStatus] = useState({ ready: false, seconds: 0 });
    
  let interval: any = useRef(null);
  let seconds: any = null;

  useEffect(() => {
    const timeNow: number = Date.now();
    const timeEnd: number = App.menu.timeEnd;
    const totalSeconds: number = Math.round((timeEnd - timeNow) / 1000);
    if (totalSeconds > 0) {
      setStatus({ ready: false, seconds: totalSeconds });
      seconds = totalSeconds;
      interval.current = setInterval(secondPassed, 1000);
    } else {
      localStorage.removeItem("preparing");
      localStorage.removeItem("timeInit");
      localStorage.removeItem("timeEnd");
      App.setMenu({ ...App.menu, preparing: false, timeInit: 0, timeEnd: 0 });
      setStatus({ ready: true, seconds: 0 });
      Notif.run({ type: "success", msg: "Order completed" });
    }
  }, []);
  
  // This function sets the coutndown taking into account the order data
  const secondPassed = () => {
    var minutes = Math.round((seconds - 30) / 60); 
    var remainingSeconds: any = seconds % 60; 
    if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds.toString();
    }
    const countdown = document.getElementById("countdown")!;
    if (countdown) {
      countdown.innerHTML = minutes + ":" + remainingSeconds;
    }
    if (seconds == 0) {
      localStorage.removeItem("preparing");
      localStorage.removeItem("timeInit");
      localStorage.removeItem("timeEnd");
      localStorage.removeItem("actualOrder");
      App.setMenu({
        desserts: [String],
        mains: [String],
        drinks: [String],
        discount40: [String],
        discount10: [String],
        totalBill: 0,
        totalTime: 0,
        preparing: "false",
        timeInit: 0,
        timeEnd: 0,
      });
      setStatus({ ready: true, seconds: 0 });
      Notif.run({ type: "success", msg: "Order completed" });
      clearInterval(interval.current);
    } else {
      seconds--;
    }
  };

  // This function is to reset the order and test the application more fluently.
  const handleReset = () => {
    clearInterval(interval.current);
    localStorage.removeItem("preparing");
    localStorage.removeItem("timeInit");
    localStorage.removeItem("timeEnd");
    localStorage.removeItem("actualOrder");
    App.setMenu({
      desserts: [String],
      mains: [String],
      drinks: [String],
      discount40: [String],
      discount10: [String],
      totalBill: 0,
      totalTime: 0,
      preparing: "false",
      timeInit: 0,
      timeEnd: 0,
    });
    setStatus({ ready: true, seconds: 0 });
    Notif.run({ type: "success", msg: "Order completed" });
  };

  return (
    <>
      {!status.ready ? (
        <>
          <TextEffect />
          <ClockTimer />
          <div className="countDiv">
            <div id="countdown">{!status.ready && "..."}</div>
            <div className="DevPurpose">
              <h4 style={{ textAlign: "center" }}>
                Only for development purposes
              </h4>
              <h2
                className="resetBtn"
                style={{ textAlign: "center" }}
                onClick={handleReset}
              >
                END TIME
              </h2>
            </div>
          </div>
        </>
      ) : (
        <>
          <OrderFinished />
        </>
      )}
    </>
  );
};

export default Waiting;
