import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Home() {

    const auth = useSelector(state => state.auth);
    console.log(auth)

    if(!auth.authenticate) {
        return <Redirect to={`/login`}/>
    }

    return (

        <div className="container mt-3">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Jam/Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        auth.user.map((result, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{result.username}</td>
                                    <td>{result.time_registrasi}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
