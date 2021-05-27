import React from 'react';

const HeaderIcon = ({ Icon }) => {
    return (
        <div className="flex items-center cursor-pointer  md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-blue-500 active:border-b-2 group">
            <Icon className="h-5 group-hover:text-blue-500" />
        </div>
    );
};

export default HeaderIcon;
