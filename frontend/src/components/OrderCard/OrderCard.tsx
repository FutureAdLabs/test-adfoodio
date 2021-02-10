import React from "react";
import MenuCardOrder from "../MenuCardOrder/MenuCardOrder";


// Shows the previous orders of the user's profile page
const OrderCard = (props: any) => {
  return (
    <>
      {props.discount40.length > 0 && (
        <>
          <h4 style={{ textAlign: "center", color: "black" }}>40$ Deals</h4>
          {props.discount40.map((elm: any, idx: any) => (
            <label key={idx}>
              <MenuCardOrder {...elm} discount={true} disc40={true} />
            </label>
          ))}
        </>
      )}
      {props.discount10.length > 0 && (
        <>
          <h4 style={{ textAlign: "center", color: "black" }}>10% OFF deals</h4>
          {props.discount10.map((elm: any, idx: any) => (
            <label key={idx}>
              <MenuCardOrder {...elm} discount={true} />
            </label>
          ))}
        </>
      )}
      {props.mains.length > 0 && (
        <>
          <h4 style={{ textAlign: "center", color: "black" }}>Mains</h4>
          {props.mains.map((elm: any, idx: any) => (
            <label key={idx}>
              <MenuCardOrder {...elm} />
            </label>
          ))}
        </>
      )}
      {props.drinks.length > 0 && (
        <>
          <h4 style={{ textAlign: "center", color: "black" }}>Drinks</h4>
          {props.drinks.map((elm: any, idx: any) => (
            <label key={idx}>
              <MenuCardOrder {...elm} />
            </label>
          ))}
        </>
      )}
      {props.desserts.length > 0 && (
        <>
          <h4 style={{ textAlign: "center", color: "black" }}>Desserts</h4>
          {props.desserts.map((elm: any, idx: any) => (
            <label key={idx}>
              <MenuCardOrder {...elm} />
            </label>
          ))}
        </>
      )}
      <hr></hr>
      <h3 style={{ textAlign: "center", color: "black" }}>TOTAL: {props.totalBill} €</h3>

    </>
  );
};

export default OrderCard;
