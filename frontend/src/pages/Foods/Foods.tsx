import React, { useContext, useEffect, useState } from "react";
import { getFoods } from "../../service/foods.service";
import FoodCard2 from "../../components/FoodCard/FoodCard";
import Grid from "@material-ui/core/Grid";
import "./Foods.css";
import { AppContext } from "../../context/AppContext";
import { Redirect } from "react-router-dom";

//This page has a query to the DDBB to get all the foods. 
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const App: any = useContext(AppContext);

  useEffect(() => {
    getFoods().then((res) => setFoods(res.data));
  }, []);

  return (
    <>
      {App.menu.preparing === "true" ? <Redirect to="waiting" /> : null}
      <div className="mainGridDiv">
        <Grid container justify="center">
          {foods.length > 1
            ? foods.map((elm, idx) => (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={idx}>
                  <FoodCard2 food={elm} />
                </Grid>
              ))
            : null}
        </Grid>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Foods;
