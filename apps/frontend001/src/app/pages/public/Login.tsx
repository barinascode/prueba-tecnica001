import PublicPage from '../../components/PublicPage'
import Header from '../../components/Header'
import { githubProvider } from '../../config/authMethod'
import socialMediaAuth from '../../service/auth'
import GithubButton from 'react-github-login-button'
import { useHistory } from "react-router-dom";

const Login = () => {

    let history = useHistory();

    const HandleOnClick = async (provider:any) => {
        
        const res:any = await socialMediaAuth( provider )
        const credential    =   res.credential.accessToken
        await localStorage.setItem("session", credential)
        history.push("/profile");
    }

    return (
        <PublicPage>
            <Header title_a="Sign" title_b="In"/>
            <GithubButton onClick={ ()=> HandleOnClick(githubProvider) }/>
        </PublicPage>
    )

}

export default Login