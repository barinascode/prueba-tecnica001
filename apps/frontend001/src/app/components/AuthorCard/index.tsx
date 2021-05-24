import React from 'react'

const AuthorCard = () => {

    return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
            <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://lh3.googleusercontent.com/ogw/ADGmqu-AlTCk7wipBJgcaX1r9rc48__Y1h6sxtYVKO87vg=s192-c-mo"/>
        </div>
        <div>
            <h2 className="text-gray-800 text-3xl font-semibold">Leonardo Tapia</h2>
            <p className="mt-2 text-gray-600">Apps Android, iOS React Native, React Js, Express, NestJs, Backend, Frontend, TDD!</p>
        </div>
        <div className="flex justify-end mt-4">
            <a href="https://github.com/barinascode" className="text-xl font-medium text-indigo-500">Github</a>
        </div>
    </div>
    )

}

export default AuthorCard