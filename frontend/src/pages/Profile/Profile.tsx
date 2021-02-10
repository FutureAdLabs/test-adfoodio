import React, { useContext, useEffect, useState } from 'react'
import LogoutBtn from '../../components/LogoutBtn/LogoutBtn'
import { AuthContext } from '../../context/AuthContext'
import './Profile.css'
import { getUser } from "../../service/auth.service";
import OrderCard from '../../components/OrderCard/OrderCard';
import Landing from '../../components/Landing/Landing';

//This page shows the previous user orders 
const Profile = () => {
    const [order, setOrder] = useState({orders:[], ready: false, empty:false})
    const Auth:any = useContext(AuthContext)

    useEffect(()=>{
        getUser({email:Auth.auth.userMail}).then((res) => {
            if (res.data.length === 0) {
                setOrder({orders:[], ready:false, empty:true})
            } else {
                setOrder({orders: res.data, ready:true, empty:false})
            }
        })
    },[Auth])

    return (
        <>
            <h2 style={{textAlign:"center"}}>Welcome, {Auth.auth.userMail && Auth.auth.userMail}</h2>
            {order.ready ? order.orders.map((elm:any, idx) => 
            <div className="orderCardMain" key={idx}>
            <h4 style={{textAlign:"center"}}>Order: {new Date(elm.id).toString().split(' ').slice(1, 5).join(' ')}</h4>
            <OrderCard {...elm}/>
            </div>
            ):
            order.empty &&
                <Landing to="/foods" msg="YOU HAVE NO ORDERS YET" btn="START NOW" img="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                        
            }
            <br></br><br></br><br></br>
            <LogoutBtn/>
            <br></br><br></br><br></br>
            <br></br><br></br><br></br>
        </>
    )
}

export default Profile