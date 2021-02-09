import React from 'react';
import Landing from '../../components/Landing/Landing';
import './Home.css'

const Home = () => {
    return (
        <>
            <Landing to="/foods" msg="Order your favourites foods online" btn="start now" img="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>        
        </>
    )
}

export default Home