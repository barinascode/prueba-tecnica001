import firebase from "../config/firebase-config"

const socialMediaAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider)
}

export default socialMediaAuth