import React from 'react'

const Card = ({ heading, value, icon }) => {
    return (
        <div className="w-72 h-32 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-600 
                rounded-3xl flex flex-col items-center justify-center gap-3 
                text-white shadow-lg hover:scale-105 hover:shadow-xl 
                transition-transform duration-300 ease-in-out">
            <div className='flex gap-2 items-center'>
                <h1 className="font-semibold text-xl sm:text-2xl">{heading}</h1>
                <span className='text-orange-500'>{icon}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-500">{value}</h1>
        </div>

    )
}

export default Card