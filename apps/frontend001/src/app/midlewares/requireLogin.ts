


const getIsLoggedIn = async () => {
    
    const token = localStorage.getItem('session');
    if(token)
        return true

    return false
}



const requireLogin = async (to:any, from:any, next:any) => {
    if (to.meta.auth) {
        if (await getIsLoggedIn()) {
            next();
        }
        next.redirect('/login');
    } else {
        next();
    }
};



export default requireLogin
