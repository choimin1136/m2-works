import React, { useState } from 'react'
import { signInWithEmailAndPassword  } from "firebase/auth"
import { auth } from "../../firebase"
import './login.scss'
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(false);
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navitage("/main");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
     <div className="login">
       <form onSubmit={handleLogin}>
         <input type={"email"} placeholder="email" onChange={e=>setEmail(e.target.value)} />
         <input type={"password"} placeholder="password" onChange={e=>setPassword(e.target.value)} />
         <button type='submit'>Login</button>
         {error && <span>이메일 또는 비밀번호를 확인하세요!</span>}
       </form>
     </div>
  )
}
