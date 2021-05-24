import React from 'react'
import Switch from "react-switch";


interface IItem {
    __typename: string
    nameWithOwner: string
    owner: {
        avatarUrl : string
    },
    name : string
}



interface IRepositories {
    repositories : IItem[]
}



const TableRepositories = (props:IRepositories) => {

    const { repositories } = props

    return (
        <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
            <thead className="bg-gray-50">
                <tr className="text-gray-600 text-left">
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                        Name
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                        Favorite
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {
                    repositories.map( (item:IItem, key) => {
                        return (
                            <tr key={key}>
                            <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                    <div className="inline-flex w-10 h-10">
                                        <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src={item.owner.avatarUrl} />
                                    </div>
                                    <div>
                                        <p className="">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <Switch onChange={()=>console.log()} checked={true} />
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>)
    
    }

export default TableRepositories

