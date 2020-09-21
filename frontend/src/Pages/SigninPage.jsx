import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';


function SigninPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    useEffect(()=>{
        
        return ()=>{
            //none
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h3>Sign in</h3>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
                    </li>
                    <li>
                        <label for="password">Password</label>
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