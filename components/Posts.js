import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from "../firebase";
import Post from "./Post";

const Posts = ({posts}) => {
    /// we get all the posts from the firebase in here
    const [realTimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', "desc")
    );

    return (
        <div className="">
            {realTimePosts ? realTimePosts?.docs.map(post => (
                // render one post, with all hte data
                <Post key={post.id} name={post.data().name} message={post.data().message} email={post.data().email} timestamp={post.data().timestamp} image={post.data().image} postImage={post.data().postImage} />
            )) : (
                // then we get the server side rendered ones
                posts.map((post) => (
                    <Post key={post.id} name={post.name} message={post.message} email={post.email} timestamp={post.timestamp} image={post.image} postImage={post.postImage} />
                ))
            )}
        </div>
    );
};

export default Posts;
