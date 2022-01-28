import React from 'react';
import Registeruser from '../components/RegisterUser';



const Registrationpage = ({setCurrentPage}) => {

    React.useEffect(() => {
        setCurrentPage('/register')
    }, [])

    return (
        <div className='d-flex column j-center'>
            <Registeruser/>
        </div>
    );
}

export default Registrationpage;
