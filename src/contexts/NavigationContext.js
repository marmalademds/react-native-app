import { createContext, useContext, useEffect, useState } from "react"

const NAV = {
    HOME: 'HOME',
    DETAIL: 'DETAIL',
    COUNTER: 'COUNTER',
    USERS: 'USERS',
}

const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
    const [navigation, setNavigation] = useState(NAV.USERS)

    return (
        <NavigationContext.Provider
            value={{
                navigation,
                setNavigation,
                NAV,
            }}
        >
            { children }
        </NavigationContext.Provider>
    )
}

export const useNavigation = () => {
    const context = useContext(NavigationContext)
    return context
}