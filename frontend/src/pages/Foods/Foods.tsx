import React, { useEffect, useState } from "react";
import { getFoods } from "../../service/foods.service";
import FoodCard2 from "../../components/FoodCard/FoodCard2";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods().then((res) => setFoods(res.data));
  }, []);
  return (
    <>
      <h1>Foods</h1>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        {foods.length > 1 ? (
          foods.map((elm, idx) => <FoodCard2 key={idx} food={elm} />)
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
};

export default Foods;
