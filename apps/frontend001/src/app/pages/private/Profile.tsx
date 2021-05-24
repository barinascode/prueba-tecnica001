import { useEffect, useState } from 'react'
import PublicPage from '../../components/PublicPage';
import Header from '../../components/Header';
import ProfileStatistics from '../../components/ProfileStatistics';
import { REPOSITORY_QUERY } from '../../service/queries/REPOSITORY_QUERY'
import { apolloClient } from '../../config/apoloClient';
import TableRepositories from '../../components/TableRepositories';


interface IRepository {
    name : string
}


const Profile = () => {

    const [ repositores, setRepositories ] = useState([])
    const [ repoFilter, setRepoFilter] = useState('')
    
    const [ totalRepositories, setTotalRepositories ] = useState(0)
    const [ totalFavorites, setTotalFavorites ] = useState(0)
    const [ totalFiltered, setTotalFiltered ] = useState(0)
    
    const [ loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        setLoading(true)

        apolloClient.query({
            query: REPOSITORY_QUERY
        })
        .then( result => {
            setTotalRepositories(result.data.viewer.repositories.totalCount)
            setRepositories(result.data.viewer.repositories.nodes)
            setLoading(false)
        })
        .catch( error => {
            setError(error)
        });

    },[])

    

    useEffect(()=>{
        const filteredRepos = repositores.filter((element:IRepository) => element.name.includes(repoFilter))
            setTotalFiltered(filteredRepos.length)
    },[repoFilter])

    const repoSelector = () => {
                
        if(repoFilter){
            const filteredRepos = repositores.filter((element:IRepository) => element.name.includes(repoFilter))
            return filteredRepos
        }

        return repositores
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <PublicPage>
            <Header title_a="Your Github" title_b="Repositories" />
            
            <ProfileStatistics 
                totalRepositories={totalRepositories}
                totalFavorites={totalFavorites}
                totalFiltered={totalFiltered}
            />

            <div className="flex flex-col mb-4">
                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Search</label>
                <input onChange={ (e)=>setRepoFilter(e.target.value) } className="border py-2 px-3 text-grey-darkest" type="text" placeholder='repo_mame' />
            </div>
            
            <TableRepositories repositories={ repoSelector() } />

        </PublicPage>

    );
};

export default Profile;
