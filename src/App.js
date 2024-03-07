import './App.css';
import Form from './components/form';

import {useState} from 'react';
import {signInWithPopup,GoogleAuthProvider, signOut} from 'firebase/auth';
import {auth} from './firebase/firebaseConfig';

function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  const [userData,setUserData] = useState({})
  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        setUserData({ displayName, email });
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log({ error });
      });
    console.log("SignUpUsingGoogle");
  };  

  const Logout=()=>{
    signOut(auth).then(() => {
      setUserData({})
      setIsLoggedIn(false)
    }).catch((error) => {
      console.log({error});
    });
    console.log("Logout");
  }
  return (
    <div className="App">
      {!isLoggedIn && (
        <>
        <div className="login-container">
        <input type="text" placeholder="Enter Username" className="input-field" /><br />
        <input type="password" placeholder="Enter Password" className="input-field" /><br />
        <button onClick={SignUpUsingGoogle} type="button" className="google-btn">
          Sign in with Google
        </button>
        </div>
        </>
      )}

      {isLoggedIn && (
        <>
          <p className="greeting">Hey {userData.displayName}</p>
          <Form />
          <button onClick={Logout} className="logout-btn">
            Log Out
          </button>
        </>
      )}
    </div>
  );
}

export default App;