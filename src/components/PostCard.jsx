import React from 'react';

const Postcard = ({item, key}) => {
    return (
        <div className='card'>
            <div>{item.title}</div>
            <div>{item.article} </div>
            <div>{item.username}</div>
        </div>
    );
}

export default Postcard;
