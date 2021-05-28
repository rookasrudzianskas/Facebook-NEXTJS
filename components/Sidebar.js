import React from 'react';
import {useSession} from "next-auth/client";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import Image from "next/image";

const Sidebar = () => {
    const [session, loading] = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <div className="rounded-full flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
                {session ? (
                    <>
                        <Image
                            src={session.user.image}
                            width={30}
                            height={30}
                            className="rounded-full flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer"
                            layout="fixed" />
                        <p className="hidden sm:inline-flex font-medium">Rookas Rudzianskas</p>
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"

                                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p className="hidden sm:inline-flex font-medium">Rookas Rudzianskas</p>
                    </>

                    )}
            </div>

            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    );
};

export default Sidebar;
