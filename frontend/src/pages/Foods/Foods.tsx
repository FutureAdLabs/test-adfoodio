import React, { useEffect, useState } from "react";
import { getFoods } from "../../service/foods.service";
import FoodCard2 from "../../components/FoodCard/FoodCard2";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import './Foods.css'

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods().then((res) => setFoods(res.data));
  }, []);
  return (
    <>
      <h1>Foods</h1>
      <div className="mainGridDiv">
        <Grid container direction="row" justify="center" alignItems="center">
          {foods.length > 1
            ? foods.map((elm, idx) => (
                <Grid container item xs={5} spacing={3} key={idx}>
                  <FoodCard2 food={elm} />
                </Grid>
              ))
            : null}
        </Grid>
      </div>
    </>
  );
};

export default Foods;
