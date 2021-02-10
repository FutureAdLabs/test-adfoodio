import { Button } from '@material-ui/core'
import React from 'react'
import { fireAuth } from '../../firebase'

// Main Function
const LogoutBtn = () => {


  //Logout with firebase authentication
    const handleLogout = () => {
        fireAuth.signOut()
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