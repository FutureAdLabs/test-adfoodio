import "./MenuCardOrder.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { NotifContext } from "../../context/NofifContext";

const MenuCardOrder = (props: any) => {
  const App: any = useContext(AppContext);
  const Notif: any = useContext(NotifContext);

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
    Notif.run({ type: "warning", msg: "Element removed for your order" });
  };

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
