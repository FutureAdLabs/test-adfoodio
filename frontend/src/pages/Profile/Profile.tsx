import React, { useContext } from 'react'
import LogoutBtn from '../../components/LogoutBtn/LogoutBtn'
import { AuthContext } from '../../context/AuthContext'
import './Profile.css'

const Profile = () => {
    const Auth:any = useContext(AuthContext)
    return (
        <>
            <h1 style={{textAlign:"center"}}>Welcome, {Auth.auth.userMail && Auth.auth.userMail}</h1>
            <LogoutBtn/>
        </>
    )
}

export default Profile