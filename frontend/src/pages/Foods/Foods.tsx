import React, { useContext, useEffect, useState } from "react";
import { getFoods } from "../../service/foods.service";
import FoodCard2 from "../../components/FoodCard/FoodCard2";


const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods().then((res) => setFoods(res.data));
  }, []);
  return (
    <>
      <h1>Foods</h1>
      {foods.length >1
      ? foods.map((elm, idx) => <FoodCard2 key={idx} food={elm}/>) 
      : <></>}
    </>
  );
};

export default Foods;
