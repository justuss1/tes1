import React from 'react';
import Postcard from '../components/PostCard';

const Mainpage = ({setCurrentPage, posts}) => {
    React.useEffect(() => {
        setCurrentPage('/main')
    }, [])
    return (
        <div>
            {posts.map((x, i) => <Postcard item={x} key={i}/>)}
            
        </div>
    );
}

export default Mainpage;
