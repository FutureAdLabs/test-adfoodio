import React, { useEffect, useState } from "react";

export const AppContext = React.createContext({});

export const AppProvider: React.FC = ({ children }) => {
  const [app, setApp] = useState({ order: [], amount: {} });
  const [menu, setMenu] = useState({});
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
      setMenu({ desserts, mains, drinks, discount40, discount10 });
      let totalAcount = 0;

      desserts.forEach(elm=> totalAcount=elm.price+totalAcount)
      mains.forEach(elm=> totalAcount=elm.price+totalAcount)
      drinks.forEach(elm=> totalAcount=elm.price+totalAcount)
      discount10.forEach(elm=> totalAcount= (elm.price * 0.9)+totalAcount)
      totalAcount= totalAcount+(discount40.length/5*40)

      console.log(totalAcount.toFixed(2))


    }
  }, [app]);

  return (
    <AppContext.Provider value={{ app, setApp, menu }}>
      {children}
    </AppContext.Provider>
  );
};
