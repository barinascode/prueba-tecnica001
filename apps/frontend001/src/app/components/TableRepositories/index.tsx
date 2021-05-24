import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRepos, selectAllRepos, reposActions } from '../../repos.slice'
import Switch from "react-switch";


const TableRepositories = () => {


    const dispatch = useDispatch();
    const repos = useSelector(selectAllRepos);
    const [repoFilter, setRepoFilter] = useState('')

    useEffect(() => {
        dispatch(fetchRepos())
    }, [dispatch]);


    const repoSelector = () => {
        if( repoFilter )
            return repos.filter((element) => element.name.includes(repoFilter))

        return repos
    }

    const onClickItemHandler = (id) => { 
        dispatch(reposActions.upsertOne({
            "id": id,
            "favorite" : true
        }))

    }



    return (
        <>
            <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Search</label>
                    <input onChange={ (e)=>setRepoFilter(e.target.value) } className="border py-2 px-3 text-grey-darkest" type="text" placeholder='repo_mame' />
            </div>

            <button onClick={onClickItemHandler}>Update one</button>
        
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
                    repoSelector().map( (item, key) => {
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
                                <Switch onChange={()=>onClickItemHandler(item.id)} checked={(item.favorite) ? true : false} />
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>)
    
    }

export default TableRepositories

