import React, { useContext, useState } from 'react'
import { signInWithEmailAndPassword  } from "firebase/auth"
import { auth } from "../../firebase"
import './login.scss'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export default function Login(props) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();
  const {log_dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(false);
        // Signed in
        const user = userCredential.user;
        log_dispatch({type:"LOGIN", payload:user})
        // console.log(user)
        navitage("/")
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
