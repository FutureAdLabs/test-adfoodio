import { ArrowRightAltTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

export const AppContext = React.createContext({});

export const AppProvider: React.FC = ({ children }) => {
  const [app, setApp] = useState({ order: [], amount: {} });

  // First check on localStorage for optimizing data persistance
  const [menu, setMenu] = useState({
    desserts: localStorage.getItem('desserts') ? JSON.parse(localStorage.getItem('desserts')!) : [String],
    mains: localStorage.getItem('mains') ? JSON.parse(localStorage.getItem('mains')!) :  [String],
    drinks: localStorage.getItem('drinks') ? JSON.parse(localStorage.getItem('drinks')!) :  [String],
    discount40: localStorage.getItem('discount40') ? JSON.parse(localStorage.getItem('discount40')!) :  [String],
    discount10: localStorage.getItem('discount10') ? JSON.parse(localStorage.getItem('discount10')!) :  [String],
    totalBill:  localStorage.getItem('totalBill') ? parseFloat(localStorage.getItem('totalBill')!) :  0,
    totalTime: localStorage.getItem('totalTime') ? parseFloat(localStorage.getItem('totalTime')!) :   0,
    preparing: localStorage.getItem('preparing') ? localStorage.getItem('preparing') : "false",
    timeInit: localStorage.getItem('timeInit') ? parseFloat(localStorage.getItem('timeInit')!) : 0,
    timeEnd: localStorage.getItem('timeEnd') ? parseFloat(localStorage.getItem('timeEnd')!) : 0,
  });

  // Main functions that calculates the order's price and preparation time
  // Also, sets the order in localStorage for data persistance
  // This should be divided into smaller procedures :(
    
  useEffect(() => {
    /* eslint-disable */
    let drinks: any[] = [];
    let mains: any[] = [];
    let desserts: any[] = [];
    let discount40: any[] = [];
    let discount10 = [];

    // Classifies the type of food by strings
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

      // Calculates, from highest bid to lowest bid, which foods are on sale
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
      
      // Getting final PRICE and TIME of each actual element
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

      if (localStorage.getItem('actualOrder') !== "true") {
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
      
      // Set localStorage too for data persistance
      const StringConversor = (array:any) => {
        const result = JSON.stringify(array)
        return result
      }
      if (localStorage.getItem('actualOrder') !== "true") {
      localStorage.setItem('desserts', StringConversor(desserts))
      localStorage.setItem('mains', StringConversor(mains))
      localStorage.setItem('drinks', StringConversor(drinks))
      localStorage.setItem('discount40', StringConversor(discount40))
      localStorage.setItem('discount10', StringConversor(discount10))
      localStorage.setItem('totalBill', totalBill.toString())
      localStorage.setItem('totalTime', totalTime.toString())
      }
    }
  }, [app]);

  return (
    <AppContext.Provider value={{ app, setApp, menu, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
