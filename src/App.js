import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./components/firebase";
import Todos from "./components/Todos";
import firebase from "firebase";
import Header from "./components/Header";


const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());


const SignIn = () => (
  <main >
    <Header />
    <div className="App">
      <h1 className="text"> Sign in to continue 🤩</h1>
      <button className="button" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  </main>
);

const App = () => {
  const [user] = useAuthState(auth);

  return user ? <Todos uid={user.uid} name={user.displayName} img={user.photoURL} email={user.email} /> : <SignIn />;
};

export default App;
