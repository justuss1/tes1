import React from 'react';
import Createpost from '../components/CreatePost'

const Createpostpage = ({setCurrentPage}) => {

    React.useEffect(()=> {
        setCurrentPage("/createpost")
    }, [])

    return (
        <div >
            <Createpost/>
        </div>
    );
}

export default Createpostpage;
