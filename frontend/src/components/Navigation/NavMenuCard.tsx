import "./NavMenuCard.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const NavMenuCard = (props: any) => {
  const App: any = useContext(AppContext);

  const removeElm = () => {
    let array = App.app.order;
   console.log( array.indexOf(props))
   
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>{props.foodName}</h5>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4>{props.price}€</h4>
          <div className="removeElm" onClick={removeElm}>
            x
          </div>
        </div>
      </div>
    </>
  );
};
export default NavMenuCard;
