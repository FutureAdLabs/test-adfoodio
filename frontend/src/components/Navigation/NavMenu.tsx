import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import NavMenuCard from "./NavMenuCard";

const NavMenu = () => {
  const App: any = useContext(AppContext);
  console.log('App', App)

  useEffect(() => {
    console.log("NavMenu useEffect:");
  }, []);

  return (
    <>
      {App.menu.totalBill !== 0 ? (
        <>
          {App.menu.discount40.length > 0 && (
            <li>
              <h2 style={{ textAlign: "center", color: "white" }}>
                40$ Deals:
              </h2>
              {App.menu.discount40.map((elm: any, idx: any) => (
                <label key={idx}>
                  <NavMenuCard {...elm} />
                </label>
              ))}
            </li>
          )}
          {App.menu.discount10.length > 0 && (
            <li>
              <h2 style={{ textAlign: "center", color: "white" }}>
                10% OFF deals:
              </h2>
              {App.menu.discount10.map((elm: any, idx: any) => (
                <label key={idx}>
                  <NavMenuCard {...elm} />
                </label>
              ))}
            </li>
          )}
          {App.menu.mains.length > 0 && (
            <li>
              <h2 style={{ textAlign: "center", color: "white" }}>Mains:</h2>
              {App.menu.mains.map((elm: any, idx: any) => (
                <label key={idx}>
                  <NavMenuCard {...elm} />
                </label>
              ))}
            </li>
          )}
          {App.menu.drinks.length > 0 && (
            <li>
              <h2 style={{ textAlign: "center", color: "white" }}>Drinks:</h2>
              {App.menu.drinks.map((elm: any, idx: any) => (
                <label key={idx}>
                  <NavMenuCard {...elm} />
                </label>
              ))}
            </li>
          )}
          {App.menu.desserts.length > 0 && (
            <li>
              <h2 style={{ textAlign: "center", color: "white" }}>Desserts:</h2>
              {App.menu.desserts.map((elm: any, idx: any) => (
                <label key={idx}>
                  <NavMenuCard {...elm} />
                </label>
              ))}
            </li>
          )}
        </>
      ) : 
      <h2 style={{ textAlign: "center", color: "white" }}>
        You have no order yet
      </h2>      
      }
    </>
  );
};

export default NavMenu;
