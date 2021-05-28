import React from 'react';
import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut} from "next-auth/client";
import { useSession } from "next-auth/client";

const Header = () => {

    const [session] = useSession();
    // console.log(session);
    // console.log(session.user.name);
    // console.log(session.user.image)

    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />

            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
                <input className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none flex-shrink" type="text" placeholder="Search Facebook"/>
            </div>
        </div>

    <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
        </div>
    </div>

            <div className="flex items-center sm:space-x-2 justify-end">
            {/*    PRofile pic in here*/}

                {session ? (
                <Image
                    onClick={() => signOut()}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                />
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    )}

                <p className="whitespace-nowrap font-semibold pr-3">Rokas Rudzianskas</p>

                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>

        </div>



    );
};

export default Header;
