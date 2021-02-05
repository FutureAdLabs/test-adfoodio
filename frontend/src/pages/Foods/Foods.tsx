import React, { useContext, useEffect, useState } from "react"
import { getFoods } from "../../service/foods.service"



const Foods = () => {

    const [foods, setFoods] = useState({})
  
    useEffect(() => {
        getFoods()
        .then((res)=> setFoods({foods:res.data}))
    }, [])
    return (
        <>
        <h1>Foods</h1>
        </>
    )
}

export default Foods