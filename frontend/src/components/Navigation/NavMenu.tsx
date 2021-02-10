import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import NavMenuCard from "./NavMenuCard";
import Button from "@material-ui/core/Button";
import {makeOrder} from '../../service/foods.service'
import { AuthContext } from '../../context/AuthContext'

// Order checker on Sidebar Nav
const NavMenu = () => {
  const Auth:any = useContext(AuthContext)
  const App: any = useContext(AppContext);

  
  //Function to add the order to the DDBB
  //Also set the actual order in localStorage to rescue data easily
  const handleAdd = () => {
    makeOrder({app:App.menu, email:Auth.auth.userMail})
    let timeInit:number = Date.now()
    let timeEnd:number = timeInit + (App.menu.totalTime * 60000)
    localStorage.setItem('preparing', "true")
    localStorage.setItem('timeInit', timeInit.toString())
    localStorage.setItem('timeEnd', timeEnd.toString())
    localStorage.setItem('actualOrder', "true")
    App.setMenu({...App.menu, preparing: "true", timeInit, timeEnd})
  };

  return (
    <>
      {/* This Component check all the existing data and show it to the client*/}
      {App.menu.totalBill !== 0 ? (
        <>
          {App.menu.discount40.length > 0 && (
            <li>
              <h2 style={{ textAlign: "center", color: "white" }}>
                40$ Deals:
              </h2>
              {App.menu.discount40.map((elm: any, idx: any) => (
                <label key={idx}>
                  <NavMenuCard {...elm} discount={true} disc40={true} />
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
                  <NavMenuCard {...elm} discount={true} />
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
          <li>
            <h5 style={{ textAlign: "center", color: "white", fontWeight:"lighter" }}>Estimated preparation time: <strong>{App.menu.totalTime}</strong> minutes.</h5>
            <div className="totalLi">
              <h2 className="totalTitle">Total </h2>
              <h2>{App.menu.totalBill} €</h2>
            </div>

            {App.menu.preparing === "false" ? 
            <div style={{textAlign:"center"}}>
            <Button
              style={{backgroundColor:"white"}}
              className="confirmBtn"
              variant="contained"
              size="small"
              onClick={handleAdd}
            >
              CONFIRM ORDER
            </Button>
          </div>    
          : null        
          }

          </li>
        </>
      ) : (
        <h2 style={{ textAlign: "center", color: "white" }}>
          You have no order yet
        </h2>
      )}
    </>
  );
};

export default NavMenu;
