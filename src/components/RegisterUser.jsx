import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../cotexts/MainContext';

const Registeruser = () => {
    const usernameRef = useRef()
    const pass1 = useRef()
    const pass2 = useRef()

    const {getUsers, setUsers} = useContext(MainContext)

    const nav = useNavigate()

    async function auth() {



        if(usernameRef.current.value.length > 10 && usernameRef.current.value.length < 3 ) {
            console.log('problem1')
            return;
        }

        if(pass1.current.value !== pass2.current.value && pass1.current.value <= 5) { 
            console.log('problem2')
            return;
        }
            
        const user = {
            username: usernameRef.current.value,
            password: pass1.current.value,
        }    
        setUsers([...getUsers, user])
        console.log(getUsers);

        nav("/login")

    }

    return (

        <div className='d-flex column w300' >

            <input type="text" ref={usernameRef} placeholder='username' />
            <input type="text" ref={pass1}  placeholder='password 1' />
            <input type="text" ref={pass2}  placeholder='password 2'/>
            <button onClick={auth}>Register</button>
        </div>
    );
}

export default Registeruser;
