import "./MenuCardOrder.css";
import React, { useContext } from "react";

// This function works on the user profile to check the past orders
const MenuCardOrder = (props: any) => {

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="paragraph">{props.foodName}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          {props.discount ? (
            props.disc40 ? (
              <s className="withoutDisc">{props.price}€</s>
            ) : (
              <>
                <s className="withoutDisc">{props.price}€</s>
                <p className="withDisc"> {props.price * 0.9} €</p>
              </>
            )
          ) : (
            <p>{props.price}€</p>
          )}
        </div>
      </div>
    </>
  );
};
export default MenuCardOrder;
