import React from 'react';
import Loginuser from '../components/LoginUser';

const Loginpage = ({setCurrentPage}) => {
    React.useEffect(() => {
        setCurrentPage('/login')
    }, [])
    return (
        <div className='d-flex j-center'>
            <Loginuser/>
        </div>
    );
}

export default Loginpage;
