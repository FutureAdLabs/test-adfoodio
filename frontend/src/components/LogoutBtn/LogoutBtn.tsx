import { Button } from '@material-ui/core'
import React from 'react'
import './LogoutBtn.css'


const LogoutBtn = () => {

    const handleLogout = () => {
        console.log('handleLogout')
    }

    return (
        <>
            <div style={{textAlign:"center", width:"50%", margin:"0 auto", maxWidth:"300px"}}>
            <Button
            color="primary"
              style={{backgroundColor:"#2C3E50"}}
              variant="contained"
              size="large"
              onClick={handleLogout}
              fullWidth
            >
              LOGOUT
            </Button>
            </div>
        </>
    )
}

export default LogoutBtn