import './FoodCard.css'
import React from 'react'


const FoodCard =( props:any) =>{
    return(
        <>
        <h1>{props.food.foodName}</h1>
        <h2>{props.food.type_of}</h2>

        <h2>{props.food.prepration_time}</h2>
<img src={props.food.image_url}></img>
        <h2>{props.food.price}</h2>
        <h2>{props.food.foodName}</h2>

        </>
    )
}
export default FoodCard