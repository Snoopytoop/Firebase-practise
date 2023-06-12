import "./App.css";
import { auth } from "./firebase/Init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  function register() {
    console.log("hi");
    createUserWithEmailAndPassword(auth, "email@mail.com", "password")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@mail.com", "passwordddd")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message); 
      });
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
