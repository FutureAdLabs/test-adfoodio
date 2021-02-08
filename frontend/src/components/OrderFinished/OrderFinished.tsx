import React from 'react'
import Landing from '../Landing/Landing'
import './OrderFinished.css'

const OrderFinished = () => {
    return (
        <>
            <Landing to="/foods" msg="YOUR FOOD IS READY!" btn="Another order" img="https://images.unsplash.com/photo-1497888329096-51c27beff665?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"/>
        </>
    )
}

export default OrderFinished