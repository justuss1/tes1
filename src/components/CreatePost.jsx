import React, { useRef, useContext } from 'react';
import MainContext from '../cotexts/MainContext';


const Createpost = () => {

    const titleRef = useRef()
    const articleRef = useRef()

    const {getCurrentUser, getPosts, setPosts} = useContext(MainContext)

    function createPost() {
        const post = {
            title: titleRef.current.value,
            article: articleRef.current.value,
            user: getCurrentUser.username
        }

        setPosts([...getPosts, post])

        console.log(post);
        console.log(getPosts);
    }


    return (
        <div className='d-flex column w300' >

        <input type="text" ref={titleRef} placeholder='title' />
        <input type="text" ref={articleRef}  placeholder='article' />

        <button onClick={createPost}>Create</button>
    </div>
    );
}

export default Createpost;
