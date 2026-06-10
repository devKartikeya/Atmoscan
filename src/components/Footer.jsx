import React from 'react'
import { FaGithub, FaLinkedin, FaCloudSun } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer
            className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-6 
                 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 
                 shadow-md text-white z-50 gap-6 md:gap-0"
        >
            {/* Left Section */}
            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                <div className="flex gap-2 text-lg font-semibold items-center">
                    <FaCloudSun className="text-yellow-400 text-2xl" />
                    <span>Atmoscan</span>
                </div>
                <div>
                    <span className="text-sm">For Business Queries: </span>
                    <span className="text-orange-500 text-sm break-words">
                        kartikeya2122008@gmail.com
                    </span>
                </div>
            </div>

            {/* Middle Section */}
            <div className="text-sm text-center md:text-left opacity-90">
                <p>
                    Real-time weather insights •{" "}
                    <span className="text-orange-500 font-semibold text-md">
                        Made by Kartikeya Mishra
                    </span>
                </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
                <a
                    href="https://github.com/devKartikeya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors duration-300"
                >
                    <FaGithub size={24} color='black'/>
                </a>
                <a
                    href="https://linkedin.com/in/kartikeya-mishra-8199973a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors duration-300"
                >
                    <FaLinkedin size={24} color='white'/>
                </a>
            </div>
        </footer>
    )
}

export default Footer