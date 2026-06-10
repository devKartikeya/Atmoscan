import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full h-14 mb-2 flex items-center justify-between px-1 
                bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 
                shadow-md fixed top-0 z-50">
            <div className='flex gap-1 items-center'>
                <img src="/Atmoscan.png" alt="" width={50} />
                <h1 className="text-xl sm:text-2xl text-white font-semibold tracking-wide">Atmoscan</h1>
            </div>
        </nav>
    )
}

export default Navbar