import { useSelector } from 'react-redux'
import { selectAllRepos, reposActions } from '../../repos.slice'
const ProfileStatistics = () => {
    
    const repos = useSelector(selectAllRepos);
    const totalFiltered = 0
    const totalFavorites = 0



    return (
        <div className="grid grid-cols-12 gap-6 mt-5">
                
                <a
                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                >
                    <div className="p-5">
                        <div className="ml-2 w-full flex-1">
                            <div>
                                <div className="mt-3 text-3xl font-bold leading-8">{repos.length}</div>
                                <div className="mt-1 text-base text-gray-600">Total repositories</div>
                            </div>
                        </div>
                    </div>
                </a>


                <a
                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                    href="#"
                >
                    <div className="p-5">
                        <div className="ml-2 w-full flex-1">
                            <div>
                                <div className="mt-3 text-3xl font-bold leading-8">{totalFiltered}</div>
                                <div className="mt-1 text-base text-gray-600">Filtered</div>
                            </div>
                        </div>
                    </div>
                </a>


                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-7 xl:col-span-6 intro-y bg-white"
                    href="#">
                    <div className="p-5">
                        <div className="ml-2 w-full flex-1">
                            <div>
                                <div className="mt-3 text-3xl font-bold leading-8">{totalFavorites}</div>
                                <div className="mt-1 text-base text-gray-600">Total favorites</div>
                            </div>
                        </div>
                    </div>
                </a>

            </div>
    )

}

export default ProfileStatistics