import React, { useState, useEffect } from 'react'

const Search = ({ value, setValue, search, setSearch }) => {

    const handleSubmit = (e) => {
        setSearch(value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <div className="w-full flex items-center my-14 px-5 py-3 gap-3">
            <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Search Location"
                className="w-full sm:w-[70%] lg:w-[50%] h-12 px-4 rounded-2xl 
               border-2 border-blue-500 
               bg-gradient-to-r from-white via-blue-50 to-white
               text-gray-800 font-semibold
               shadow-md shadow-blue-200
               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-600
               transition duration-300 ease-in-out
               placeholder-gray-400"
                value={value}
            />
            <button
                className="bg-green-500 text-white font-semibold cursor-pointer 
               rounded-2xl px-6 py-3 hover:bg-green-700 transition"
                onClick={() => setSearch(value)}
            >
                Search
            </button>
        </div>
    )
}
export default Search
