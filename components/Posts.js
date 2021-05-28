import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from "../firebase";
import Post from "./Post";

const Posts = () => {
    /// we get all the posts from the firebase in here
    const [realTimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', "desc")
    );

    return (
        <div className="">
            {realTimePosts?.docs.map(post => (
                // render one post, with all hte data
                <Post key={post.id} name={post.data().name} message={post.data().message} email={post.data().email} timestamp={post.data().timestamp} image={post.data().image} postImage={post.data().postImage} />
            ))}
        </div>
    );
};

export default Posts;
