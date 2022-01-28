import React from 'react';

import { Link } from 'react-router-dom';

const Toolbar = ({user, page}) => {

    return (
        <div className='toolbar'>

            {!user && <div>
                {page !=="/login" && <Link to="/login">Login</Link> }
                {page !== "/register" && <Link to="/register">Registration</Link>}
            </div>}

            {(page === '/createpost' && user) && <Link to="/main">Main</Link>}
            {user && <Link to="/createpost">Create Post</Link> }
            
        </div>
    );
}

export default Toolbar;
