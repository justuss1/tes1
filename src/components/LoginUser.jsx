import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../cotexts/MainContext';


const Loginuser = () => {
    const usernameRef = useRef()
    const pass1 = useRef()
    const {getUsers, setCurrentUser} = useContext(MainContext)

    const nav = useNavigate()

    function auth() {

        const userData = {
            username: usernameRef.current.value,
            password: pass1.current.value,
        }

        const user = getUsers.find(x => x.username === userData.username && x.password === userData.password)

        if(user) {
            setCurrentUser(user)
            nav("/createpost")
        }
    }

    return (

        <div className='d-flex column w300' >

            <input type="text" ref={usernameRef} placeholder='username' />
            <input type="text" ref={pass1}  placeholder='password 1' />

            <button onClick={auth}>Login</button>
        </div>
    );
}

export default Loginuser;
