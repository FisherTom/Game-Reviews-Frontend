import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState({})
    return( 
        <UserContext.Provider value={{loggedInUser, setLoggedInUser}} >
        {children}
        </UserContext.Provider>
    )
}