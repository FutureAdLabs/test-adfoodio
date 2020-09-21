import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';


function SigninPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(userInfo){
            //le redirecciono al home
            props.history.push('/');
        }
        return ()=>{
            //none
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h3>Sign in</h3>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}></input>
                    </li>
                    <li>
                        <button type="submit" className="sign-button">Sign in</button>
                    </li>
                    <li>
                        <p>Not registered yet? </p>
                    </li>
                    <li>
                        <Link to="/register" className="create-button">Create your account</Link>
                    </li>
                </ul>

            </form>

        </div>
        );
}

export default SigninPage;