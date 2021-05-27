import React from 'react';

const HeaderIcon = ({ Icon, active }) => {
    return (
        <div className="flex items-center cursor-pointer  md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-blue-500 active:border-b-2 group">
            <Icon className={`h-5 text-center text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500 ${active && 'text-blue-500'}`} />
        </div>
    );
};

export default HeaderIcon;
