import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from './../constants/index';
const Navbar = () => {
    return (
        <header className='w-full sm:px-10 px-5 py-5 flex justify-between items-center'>
            <nav className='w-full screen-max-width flex'>
                <img src={appleImg} alt="Apple" width={14} height={18} />
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav, index) => {
                        return <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' key={index}>
                            {nav}
                        </div>
                    })}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt="searchImg" width={18} height={18} />
                    <img src={bagImg} alt="bagImg" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar