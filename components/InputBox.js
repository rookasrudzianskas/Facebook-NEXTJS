import React, {useRef, useState} from 'react';
import Image from "next/image";
import {useSession} from "next-auth/client";

import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import {db} from "../firebase";
import firebase from "firebase";

const InputBox = () => {

    const [session, loading] = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();

        // if there is nothing, so do not do anything
        if(!inputRef.current.value) return;

        // if thereis we add
        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        inputRef.current.value = "";

    };

    const addImageToPost = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        // if the user selected the fire, we read the file
        if(e.target.files[0]) {
            // read the file
            reader.readAsDataURL(e.target.files[0]);
        }

        // then the reader loads
        reader.onload = (readerEvent) => {
            // then it reads the image, we just add it to the state
            setImageToPost(readerEvent.target.result);
        };
    };

    const removeImage = () => {
        // after done uploading, it resets the image in local here
        setImageToPost(null);
    }



    return (

        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
            <Image
                className="rounded-full"
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
            />
            <form className="flex flex-1" action="">
                <input ref={inputRef} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder={`What's on your mind ${session.user.name}?`}/>
                <button type="submit" hidden onClick={sendPost} />
            </form>

                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost} alt=""/>
                        <p className="text-xs text-red-500">Remove</p>
                    </div>
                )}
        </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                {/* if we click on this div. it clicks the file input*/}
                <div onClick={() => filePickerRef.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input ref={filePickerRef} type="file" hidden onChange={addImageToPost}/>
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>

            </div>
        </div>
    );
};

export default InputBox;
