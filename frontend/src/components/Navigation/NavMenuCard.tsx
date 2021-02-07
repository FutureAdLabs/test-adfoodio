import "./NavMenuCard.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const NavMenuCard = (props: any) => {
  const App: any = useContext(AppContext);

  const removeElm = async () => {
    let array = App.app.order;

    let arrayCopy: any[] = [];
    let found = false;
    array.forEach((elm: any) => {
      if (elm.foodName === props.foodName) {
        if (!found) {
          found = true;
        } else {
          arrayCopy.push(elm);
        }
      } else {
        arrayCopy.push(elm);
      }
    });
    App.setApp({ ...App.app, order: arrayCopy });
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
