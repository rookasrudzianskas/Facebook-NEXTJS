import React from 'react';
import {useSession} from "next-auth/client";
import Image from 'next/image';

const SidebarRow = ({Icon, title}) => {
    const [session, loading] = useSession();

    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">


            {Icon && (
                <Icon className="h-8 w-8 text-blue-500" />
            )}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    );
};

export default SidebarRow;
