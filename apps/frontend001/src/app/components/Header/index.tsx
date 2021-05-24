import React from 'react'

interface IProps{
    title_a : string,
    title_b : string
,}

const Header = ({ title_a, title_b }:IProps) => {
    
    return (
        <div className="sm:text-center lg:text-left my-10">

        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-indigo-10">{title_a}</span>
            <span className="block text-red-600 xl:inline">
            {title_b}
            </span>
        </h1>

        <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        I hope you can enjoy this demo and it can meet your expectations.
        </p> 
        </div>
        )
}

export default Header