import { useState } from "react";
import {SyncOutlined} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userRegister } from '../store/action';

function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading] = useState(false)

    const auth = useSelector(state => state.auth);
    // const regis = useSelector(state => state.regis);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username,
            password
        }

        dispatch(userRegister(user));
    }

    if(auth.authenticate) {
        return <Redirect to={`/`}/>
    }

    return (
        <>
            <h1 className="jumbotron text-center bg-primary">
                Register
            </h1>

            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input
                        required
                        type="text"
                        placeholder="Enter Name"
                        className="form-control mb-4 p-2" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        required
                        type="password"
                        placeholder="Enter Password"
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
                    Already registered?{" "}
                    <a href="/login">
                        <p>Login</p>
                    </a>
                </p>
            </div>
        </>
    )
}

export default Register;