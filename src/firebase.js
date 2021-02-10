import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyAB_4oeeue7o6dkNA4fguyDYC5Ty--WYCQ',
  authDomain: 'ambulance-finder-f86b9.firebaseapp.com',
  projectId: 'ambulance-finder-f86b9',
  storageBucket: 'ambulance-finder-f86b9.appspot.com',
  messagingSenderId: '181561549341',
  appId: '1:181561549341:web:16be42c1dd4b92ed2d9cf4',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
