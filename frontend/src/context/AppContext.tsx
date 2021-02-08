import React, { useEffect, useState } from "react";

export const AppContext = React.createContext({});

export const AppProvider: React.FC = ({ children }) => {
  const [app, setApp] = useState({ order: [], amount: {} });
  const [menu, setMenu] = useState({
    desserts: [String],
    mains: [String],
    drinks: [String],
    discount40: [String],
    discount10: [String],
    totalBill: 0,
    totalTime: 0,
    preparing: localStorage.getItem('preparing') ? localStorage.getItem('preparing') : "false",
    timeInit: localStorage.getItem('timeInit') ? localStorage.getItem('timeInit') : 0,
    timeEnd: localStorage.getItem('timeEnd') ? localStorage.getItem('timeEnd') : 0,
  });

  useEffect(() => {
    /* eslint-disable */

    let drinks: any[] = [];
    let mains: any[] = [];
    let desserts: any[] = [];
    let discount40: any[] = [];
    let discount10 = [];
    if (app.order) {
      app.order.forEach((elm: any) => {
        if (elm.type_of === "dessert") {
          desserts.push(elm);
        } else if (elm.type_of === "main") {
          mains.push(elm);
        } else {
          drinks.push(elm);
        }
      });
      var i = 0;
      while (i < app.order.length) {
        if (desserts.length >= 1 && mains.length >= 2 && drinks.length >= 2) {
          discount40.push(
            desserts[0],
            mains[0],
            mains[1],
            drinks[0],
            drinks[1]
          );
          desserts.shift(), mains.splice(0, 2), drinks.splice(0, 2);
          i++;
        } else if (drinks.length >= 1 && mains.length >= 1) {
          discount10.push(mains[0], drinks[0]);
          mains.shift();
          drinks.shift();
          i++;
        } else {
          i++;
        }
      }
      // Setear MENU
      let totalBill = 0;
      let totalTime = 0;

      desserts.forEach((elm) => {
        totalBill = elm.price + totalBill;
        totalTime = elm.preparation_time + totalTime;
      });

      mains.forEach((elm) => {
        totalBill = elm.price + totalBill;
        totalTime = elm.preparation_time + totalTime;
      });

      drinks.forEach((elm) => {
        totalBill = elm.price + totalBill;
        totalTime = elm.preparation_time + totalTime;
      });

      discount10.forEach((elm) => {
        totalBill = elm.price * 0.9 + totalBill;
        totalTime = elm.preparation_time + totalTime;
      });

      discount40.forEach((elm) => {
        totalTime = elm.preparation_time + totalTime;
      });
      totalBill = totalBill + (discount40.length / 5) * 40;


      setMenu({...menu, 
        desserts,
        mains,
        drinks,
        discount40,
        discount10,
        totalBill,
        totalTime,
      });
    }
  }, [app]);

  return (
    <AppContext.Provider value={{ app, setApp, menu, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
