'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();

    const [currentuser, setcurrentuser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const [loggedin, setloggedin] = useState(currentuser !== null)

    const logout = () => {
        sessionStorage.removeItem('user');
        setcurrentuser(null);
        setloggedin(false);
        router.push('/Login');
    }

    return <AppContext.Provider value={{ loggedin, setloggedin, logout }}>
        {children}
    </AppContext.Provider>
};
const useAppContext = () => useContext(AppContext);
export default useAppContext;



