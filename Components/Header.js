import React from 'react';

const Header = () => {
    return (
        <div>
        <header className="grid grid-cols-6 text-black shadow h-16">
            <div className="col-span-2 flex items-center justify-center"><h1 className=" font-bold text-3xl">Bangla Jokes</h1></div>
            <div className="col-span-3"></div>
            <div className="flex gap-x-6 justify-center items-center"><a className='text-xl'>Github</a></div>
        </header>
        </div>
    );
};

export default Header;