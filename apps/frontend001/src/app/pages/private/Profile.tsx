import PublicPage from '../../components/PublicPage';
import Header from '../../components/Header';
import ProfileStatistics from '../../components/ProfileStatistics';
import TableRepositories from '../../components/TableRepositories';



const Profile = () => {
    return (
        <PublicPage>
            <Header title_a="Your Github" title_b="Repositories" />
            <ProfileStatistics />
            <TableRepositories />
        </PublicPage>

    );
};


export default Profile