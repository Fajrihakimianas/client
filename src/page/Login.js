import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userLogin } from '../store/action';

// import {toast} from 'react-toastify';
import {SyncOutlined} from '@ant-design/icons';

const Login = () => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const auth = useSelector(state => state.auth);
    
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(false)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username, password
        }

        dispatch(userLogin(user));
    }

    if(auth.authenticate) {
        return <Redirect to={`/`}/>
    }

    return (
        <>
            <h1 className="jumbotron text-center bg-primary">
                Login
            </h1>

            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input
                        required
                        type="username"
                        placeholder="Username"
                        className="form-control mb-4 p-2" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        className="form-control mb-4 p-2" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="btn btn-block btn-primary form-control" 
                        disabled={!username || !password || loading}>
                            {loading ? <SyncOutlined spin/> : "Submit"}
                    </button>
                </form>

                <p className="text-center p-3">
                    No Account?{" "}
                    <a href="/register">
                        <p>Register</p>
                    </a>
                </p>
            </div>
        </>
    )
}

export default Login;