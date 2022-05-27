import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    currentUser : JSON.parse(localStorage.getItem("user")) || null,
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, log_dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    },[state.currentUser])

    return(
        <AuthContext.Provider value={{ currentUser: state.currentUser, log_dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}