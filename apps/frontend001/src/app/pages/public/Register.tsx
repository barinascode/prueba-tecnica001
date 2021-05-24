import PublicPage from '../../components/PublicPage'
import Header from '../../components/Header'
import { githubProvider } from '../../config/authMethod'
import socialMediaAuth from '../../service/auth'
import GithubButton from 'react-github-login-button'

const Register = () => {

    const HandleOnClick = async (provider:any) => {
        const res = await socialMediaAuth( provider )
    }

    return (
        <PublicPage>
            <Header title_a="Sign" title_b="Up"/>
            <GithubButton label='Sign up with Github' onClick={ ()=> HandleOnClick(githubProvider) }/>
        </PublicPage>
    )

}

export default Register