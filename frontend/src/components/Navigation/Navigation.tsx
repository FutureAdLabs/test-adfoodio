import { useState } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'
import NoUserPic from './NoUserWhite.png'
import NavMenu from './NavMenu'

// This is the navbar. Also is the checker of the order at NavMenu
const Navigation = () => {
    const [burger, setBurger] = useState({
        burger1: 'spinner diagonal part-1',
        burger2: 'spinner horizontal',
        burger3: 'spinner diagonal part-2',
        sidebar: 'sidebarMenu',
        SubSidebar: 'SubSidebarMenu',
        open: false,
    })

    const handleBurgerClick = () => {
        if (burger.open === false) {
            setBurger({
                burger1: 'spinner diagonal part-1 Checked',
                burger2: 'spinner horizontal Checked',
                burger3: 'spinner diagonal part-2 Checked',
                sidebar: 'sidebarMenu Checked',
                SubSidebar: 'SubSidebarMenu Checked',
                open: true,
            })
        } else {
            setBurger({
                burger1: 'spinner diagonal part-1',
                burger2: 'spinner horizontal',
                burger3: 'spinner diagonal part-2',
                sidebar: 'sidebarMenu',
                SubSidebar: 'SubSidebarMenu',
                open: false,
            })
        }
    }

    const handleHideClick = () => {
        setBurger({
            burger1: 'spinner diagonal part-1',
            burger2: 'spinner horizontal',
            burger3: 'spinner diagonal part-2',
            sidebar: 'sidebarMenu',
            SubSidebar: 'SubSidebarMenu',
            open: false,
        })
    }

    return (
        <>
            {/* ===> NAVBAR <=== */}
            <div className='Navbar Dark'>
                {/* => NAV BURGER <= */}
                <div className='Burger' onClick={() => handleBurgerClick()}>
                    <div className={burger.burger1}></div>
                    <div className={burger.burger2}></div>
                    <div className={burger.burger3}></div>
                </div>
                <h4 className="yourOrder" onClick={()=>handleBurgerClick()}>Your order</h4>
                {/* => NAV LOGO <= */}
                <div style={{ position: "absolute", margin: '0 auto', marginLeft: 'calc(50% - 20px)', cursor: "pointer" }}>
                    <Link onClick={() => handleHideClick()} to='/' className="linkClass">
                       <h2 style={{textDecoration:"none"}}>Adfoodio</h2>
                    </Link>
                </div>
                {/* => NAV USER PHOTO<= */}
                <Link to="/signin" onClick={() => handleHideClick()}>
                    <img
                        className="NavUserPic"
                        width="40"
                        height="40"
                        style={{ borderRadius: "50%", cursor: "pointer" }}
                        alt="UserPhoto"
                        src={NoUserPic}
                    />
                </Link>
            </div>
            {/* ===> MODAL PART <=== */}
            <div className={burger.SubSidebar} onClick={() => handleHideClick()}></div>
            <div className={[burger.sidebar, "Navbar Dark"].join(" ")}>
                <NavMenu/>
            </div>
        </>
    )
}

export default Navigation