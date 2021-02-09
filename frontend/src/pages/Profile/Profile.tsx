import React, { useContext, useEffect, useState } from 'react'
import LogoutBtn from '../../components/LogoutBtn/LogoutBtn'
import { AuthContext } from '../../context/AuthContext'
import './Profile.css'
import { getUser } from "../../service/auth.service";
import OrderCard from '../../components/OrderCard/OrderCard';

const Profile = () => {

    const [order, setOrder] = useState({orders:[], ready: false})
    const Auth:any = useContext(AuthContext)

    useEffect(()=>{
        getUser({email:Auth.auth.userMail}).then((res) => {
            console.log('res', res)
            setOrder({orders: res.data, ready:true})
        })
    },[])

    return (
        <>
            <h1 style={{textAlign:"center"}}>Welcome, {Auth.auth.userMail && Auth.auth.userMail}</h1>
            {order.ready ? order.orders.map((elm:any, idx) => 
            <div className="orderCardMain" key={idx}>
            <h4 style={{textAlign:"center"}}>Order no: {idx + 1} <br></br> Time: {new Date(elm.id).toString().split(' ').slice(1, 5).join(' ')}</h4>
            <OrderCard {...elm}/>
            </div>
            ): null}
            <LogoutBtn/>
        </>
    )
}

export default Profile